import React from 'react';

export default function SpookyScarySkeleton() {
    return <div className='TentSkeleton'>
        <div className='PoleLabel one'>Pole 1</div>
        <div className='PoleLabel two'>Pole 2</div>
        <div className='PoleLabel three'>Pole 3</div>
        <div className='PoleLabel four'>Pole 4</div>
        <div className='PoleLabel five'>Pole 5</div>
        <div className='PoleLabel six'>Pole 6</div>
        <div className='PoleArrows'>
            <div className='Arrow one' />
            <div className='Arrow two' />
            <div className='Arrow three' />
            <div className='Arrow four' />
            <div className='UpDownArrow'>
                <div className='Up' />
                <div className='Down' />
            </div>
        </div>
    </div>;
}
