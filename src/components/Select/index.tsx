import React from 'react';
import './Select.less';

export default function Select({ options, onSelect }: {
    options: any;
    onSelect: (x: string) => void;
    [x: string]: any;
}) {
    return (
        <div className='custom-select'>
            <select onChange={event => onSelect((event.target as HTMLSelectElement).value)}>
                {options.map((option: {
                    value: string;
                    label: string;
                }) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}
