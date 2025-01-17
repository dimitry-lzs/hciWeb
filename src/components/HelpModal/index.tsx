import React from 'react';

import './HelpModal.less';

export default function HelpModal({ title, text }: { title: string, text: string }) {
    return (
        <div>
            <div className='HelpTitle'>{title}</div>
            <div className='HelpText'>
                {text}
            </div>
        </div>
    );
}
