import React, { useEffect, useMemo } from 'react';
import LSDLamp from '../LSDLamp';

import './SoberLamp.less';

/**
 * Convert a color temperature (in Kelvin) to a hex RGB string, applying
 * a basic brightness/dimming factor (0–100).
 *
 * Typical ranges:
 *   - Warm/incandescent: ~2000–3000 K
 *   - Neutral/office:    ~4000–5000 K
 *   - Daylight:          ~5500–6500 K
 *   - Overcast/blue sky: up to ~10000 K
 */
function kelvinToHex(
    kelvin: number,
    lumens: number,
    maxLumens = 2000
): string {
    // 1) Clamp Kelvin to a reasonable range
    const temp = Math.max(1000, Math.min(40000, kelvin));

    // 2) Convert Kelvin to a smaller scale
    const t = temp / 100;

    let red: number;
    let green: number;
    let blue: number;

    // --- Red ---
    if (t <= 66) {
        red = 255;
    } else {
        red = 329.698727446 * Math.pow(t - 60, -0.1332047592);
        red = Math.max(0, Math.min(255, red));
    }

    // --- Green ---
    if (t <= 66) {
        green = 99.4708025861 * Math.log(t) - 161.1195681661;
    } else {
        green = 288.1221695283 * Math.pow(t - 60, -0.0755148492);
    }
    green = Math.max(0, Math.min(255, green));

    // --- Blue ---
    if (t >= 66) {
        blue = 255;
    } else if (t <= 19) {
        blue = 0;
    } else {
        blue = 138.5177312231 * Math.log(t - 10) - 305.0447927307;
        blue = Math.max(0, Math.min(255, blue));
    }

    // 3) Instead of purely linear scaling, use a gamma curve
    //    so that low lumen values aren't *too* dark.
    //    1) First, compute the linear ratio
    const linearScale = Math.min(1, Math.max(0, lumens / maxLumens));

    //    2) Apply a gamma transform.
    //       If gamma < 1, it brightens low values.
    const gamma = 0.5; // sqrt scaling
    const scale = Math.pow(linearScale, gamma);

    // 4) Scale each channel
    red = Math.round(red * scale);
    green = Math.round(green * scale);
    blue = Math.round(blue * scale);

    // 5) Convert to hex
    return `#${red.toString(16).padStart(2, '0')}` +
           `${green.toString(16).padStart(2, '0')}` +
           `${blue.toString(16).padStart(2, '0')}`;
}

export default function SoberLamp({ warmth, brightness }: { warmth: number, brightness: number }): JSX.Element {
    const color = useMemo(() => kelvinToHex(warmth, brightness), [warmth, brightness]);
    return (
        <LSDLamp hex={color} />
    );
}
