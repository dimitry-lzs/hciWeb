import React from 'react';
import './Switch.less';

export default function Switch() {
    return (
        <div className="switchComponent">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
