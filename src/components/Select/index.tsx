import React from 'react';
import './Select.less';

export default function Select({ options, onSelect, value = '', placeHolder = '' }: {
    options: any;
    onSelect: (x: string) => void;
    [x: string]: any;
    value?: string | null;
    placeHolder?: string;
}) {
    return (
        <div className='custom-select'>
            <select onChange={event => onSelect((event.target as HTMLSelectElement).value)} value={value || ''}>
                {placeHolder ? <option disabled selected value={''}>{placeHolder}</option> : null}
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
