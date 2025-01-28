import React from 'react';

import './Switch.less';

export default function Switch({
    on,
    setOnOff,
    onIcon,
    offIcon,
    onColor,
    offColor,
    disabled
}: {
    on: boolean;
    setOnOff: (on: boolean) => void;
    onIcon?: JSX.Element;
    offIcon?: JSX.Element;
    onColor?: string;
    offColor?: string;
    disabled?: boolean;
}) {
    return (
        <div className='switchComponent'>
            <label className={`switch ${disabled ? 'disabled' : ''}`}>
                <input disabled={disabled} type='checkbox' checked={on} onChange={checked => {
                    setOnOff(checked.target.checked);
                }} />
                <span className='slider round' {...(on ? { style: { backgroundColor: onColor } } : { style: { backgroundColor: offColor } })}>
                    <span className='switchIcon'>{on ? <>{onIcon}</> : <>{offIcon}</>}</span>
                </span>
            </label>
        </div>
    );
}
