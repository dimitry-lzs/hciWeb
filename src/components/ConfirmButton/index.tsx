import React from 'react';

import './ConfirmButton.less';

export enum ButtonIcon {
    Tick = 'tick',
    Settings = 'settings',
    Weather = 'weather',
    Battery = 'battery',
    Participate = 'participate',
}

export enum ButtonColor {
    Green = 'green',
    Blue = 'blue',
    Yellow = 'yellow',
}

export default function ConfirmButton({ text, icon, color }: { text: string; icon: ButtonIcon; color: ButtonColor }) {
    return (
        <div className={`ConfirmButton ${color}`}>
            <div className="ConfirmButtonText">{text}</div>
            <div className={`ConfirmButtonIcon ${icon}`} />
        </div>
    );
}
