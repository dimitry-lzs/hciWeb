import React from 'react';
import './Radio.less';

export default function Radio({ options = [], selectedValue = '', onChange = () => {} }: {
    options?: { value: string; label: string }[];
    selectedValue?: string;
    onChange?: (value: string) => void;
}) {
    return (
        <div className='radioContainer'>
            <form>
                {options.map(({ value, label }) => (
                    <label key={value} className='radioLabel'>
                        <input type='radio' name='radio' value={value} checked={selectedValue === value} onChange={() => onChange(value)} />
                        <span className='checkmark'></span>
                        {label}
                    </label>
                ))}
            </form>
        </div>
    );
}
