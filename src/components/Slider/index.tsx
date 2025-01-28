import React, { useMemo, useState } from 'react';
import './Slider.less';

const thumbWidth = 24;

export default function Slider({ value, setValue, minValue = 0, maxValue = 100, type = '%', disabled = false }: {
    value: number;
    setValue: (value: number) => void;
    minValue?: number;
    maxValue?: number;
    type?: string;
    disabled?: boolean;
}) {
    const percentageValue = useMemo(() => (value - minValue) / ((maxValue - minValue) / 100), [value, minValue, maxValue]);
    const widthToBeAdded = useMemo(() => (thumbWidth / 2) - ((percentageValue / 100) * thumbWidth), [percentageValue]);
    return (
        <div className={`slidecontainer ${disabled ? 'disabled' : ''}`}>
            <div className='sliderBackground' style={{ width: `calc(${percentageValue}% + ${widthToBeAdded}px` }} />
            <input type='range' disabled={disabled} min={minValue} max={maxValue} value={value} onChange={event => setValue(Number(event.target.value ?? 0))} className='slider' id='myRange' />
            <div className='sliderValue'>{value}{type}</div>
        </div>
    );
}
