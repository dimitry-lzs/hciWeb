import React from 'react';

import './BackButton.less';

export default function BackButton({ navigate }: { navigate: () => void }) {
    return (
        <div className='BackButton' onClick={navigate}>
            <div className='BackArrow' />
            Back
        </div>
    );
}
