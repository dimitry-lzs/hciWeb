import React from 'react';

import './Pin.less';

export enum PinColor {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
    Yellow = 'yellow',
    Purple = 'purple',
    Orange = 'orange',
    DarkBlue = 'darkBlue',
}

export default function Pin({ color, hex, onClick }: { color?: PinColor, hex?: string, onClick?: () => void }): JSX.Element {
    return (
        <div className='PinBox' {...(onClick ? { onClick } : {})}>
            <svg className={`locationPin ${color} ${onClick ? 'clickable' : ''}`} width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M13.9993 0.333328C6.63555 0.333328 0.666016 7.0043 0.666016 14.5C0.666016 21.937 4.92156 30.0207 11.5611 33.1241C13.1089 33.8475 14.8898 33.8475 16.4376 33.1241C23.0771 30.0207 27.3327 21.937 27.3327 14.5C27.3327 7.0043 21.3631 0.333328 13.9993 0.333328ZM13.9993 17C15.8403 17 17.3327 15.5076 17.3327 13.6667C17.3327 11.8257 15.8403 10.3333 13.9993 10.3333C12.1584 10.3333 10.666 11.8257 10.666 13.6667C10.666 15.5076 12.1584 17 13.9993 17Z"
                    fill={hex} />
            </svg>
        </div>
    );
}
