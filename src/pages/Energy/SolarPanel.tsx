import React from 'react';

export default function SolarPanel({ sunExposure, label }: { sunExposure: number, label?: string }) {
    const color = sunExposure >= 80 ? 'Green' : sunExposure >= 50 ? 'Yellow' : 'Red';

    return (<div className='PanelInfo'>
        <div className='InfoTitle'>{`Solar Panel ${label ? label : ''}`}</div>
        <div className='PanelIcon' />
        <div className='InfoDescription'>
            <div className='Info'>Sun Exposure:</div>
            <div className={color}>{`${sunExposure}%`}</div>
        </div>
    </div>
    );
}
