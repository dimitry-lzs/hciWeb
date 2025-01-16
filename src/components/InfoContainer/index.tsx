import React from 'react';

import './InfoContainer.less';

export function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className='InfoRow'>
            <div className='InfoLabel'>{label}</div>
            <div className='InfoValue'>{value}</div>
        </div>
    );
}

export default function InfoContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='InfoContainer'>
            {children}
        </div>
    );
}
