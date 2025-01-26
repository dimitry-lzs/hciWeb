import React from 'react';
import './Switch.less';

export default function Switch() {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    );
}