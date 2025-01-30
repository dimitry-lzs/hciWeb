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

export default function ConfirmButton({ text, icon, color, onClick }: { text: string; icon: ButtonIcon; color: ButtonColor, onClick?: () => void }) {
    return (
        <div className={`ConfirmButton ${color}`} onClick={onClick}>
            <div className="ConfirmButtonText">{text}</div>
            <div className={`ConfirmButtonIcon ${icon}`} />
        </div>
    );
}
