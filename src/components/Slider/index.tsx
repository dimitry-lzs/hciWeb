import React, { useMemo, useState } from 'react';
import './Slider.less';

const thumbWidth = 24;

export default function Slider({ minValue = 0, maxValue = 100, type = '%' }: {
    minValue?: number;
    maxValue?: number;
    type?: string;
}) {
    const [value, setValue] = useState(50);
    const percentageValue = useMemo(() =>  (value - minValue) / ((maxValue - minValue) / 100), [value, minValue, maxValue]);
    const widthToBeAdded = useMemo(() => (thumbWidth / 2) - ((percentageValue / 100) * thumbWidth), [percentageValue]);
    return (
        <div className='slidecontainer'>
            <div className='sliderBackground' style={{ width: `calc(${percentageValue}% + ${widthToBeAdded}px` }} />
            <input type='range' min={minValue} max={maxValue} value={value} onChange={event => setValue(Number(event.target.value ?? 0))} className='slider' id='myRange' />
            <div className='sliderValue'>{value}{type}</div>
        </div>
    );
}
