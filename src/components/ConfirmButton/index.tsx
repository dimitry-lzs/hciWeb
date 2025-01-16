import React from 'react';

import './ConfirmButton.less';

export enum ButtonIcon {
    Tick = 'tick',
    Settings = 'settings',
    Weather = 'weather',
    Battery = 'battery',
}

export enum ButtonColor {
    Green = 'green',
    Blue = 'blue',
    Yellow = 'yellow',
}

export default function ConfirmButton({ icon, color }: { icon: ButtonIcon; color: ButtonColor }) {
    return (
        <div className={`ConfirmButton ${color}`}>
            Confirm
            <div className={`ConfirmButtonIcon ${icon}`} />
        </div>
    );
}
