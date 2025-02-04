import React from 'react';
import './HelpModal.less';

interface HelpModalProps {
    title: string;
    children: React.ReactNode;
}

export default function HelpModal({ title, children }: HelpModalProps) {
    return (
        <div className='HelpModal'>
            <div className='HelpTitle'>{title}</div>
            <div className='HelpText'>
                {children}
            </div>
        </div>
    );
}
