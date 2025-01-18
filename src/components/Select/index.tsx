import React from 'react';
import './Select.less';

export default function Select({ options }: {
    options: any;
    [x: string]: any;
}) {
    return (
        <div className='custom-select'>
            <select>
                {options.map((option: any) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}
