import React, { useState } from 'react';

import Header from '../../components/Header';
import SpookyScarySkeleton from './SpookyScarySkeleton';

import './PolesSetup.less';

const totalPoles = 6;

function Switch({ currentPole, prev, next }: { currentPole: number, prev: () => void, next: () => void }) {
    return (
        <div className='PoleSwitch'>
            <div className='PoleLabel'>Pole</div>
            <div className='Switch'>
                <div className='PoleSwitchButton' onClick={prev} />
                <div className='PoleNumber'>{currentPole}</div>
                <div className='PoleSwitchButton right' onClick={next} />
            </div>
        </div>
    );
}

function PoleController({ coordinates, setCoordinates, depth, setDepth }: { coordinates: { x: number, y: number }, setCoordinates: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>, depth: number, setDepth: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div className='PoleControls'>
            <div className='PoleArrow left' onMouseDown={(event) => handleMouseDown(event, () => setCoordinates(oldCoordninates => ({ ...oldCoordninates, x: oldCoordninates.x - 1 })))} />
            <div className='PoleArrow right' onMouseDown={(event) => handleMouseDown(event, () => setCoordinates(oldCoordninates => ({ ...oldCoordninates, x: oldCoordninates.x + 1 })))} />
            <div className='PoleArrow forward' onMouseDown={(event) => handleMouseDown(event, () => setCoordinates(oldCoordninates => ({ ...oldCoordninates, y: oldCoordninates.y + 1 })))} />
            <div className='PoleArrow backward' onMouseDown={(event) => handleMouseDown(event, () => setCoordinates(oldCoordninates => ({ ...oldCoordninates, y: oldCoordninates.y - 1 })))} />
            <div className='Reset'
                onClick={() => {
                    setCoordinates({ x: 50, y: 50 });
                    setDepth(150);
                }} />
            <div className='PoleCoordinate x'>{coordinates.x}</div>
            <div className='PoleCoordinate y'>{coordinates.y}</div>
            <div className='PoleArrow up' onMouseDown={(event) => handleMouseDown(event, () => setDepth(oldDepth => oldDepth - 1))} />
            <div className='PoleDepth'>{`${depth}mm`}</div>
            <div className='PoleArrow down' onMouseDown={(event) => handleMouseDown(event, () => setDepth(oldDepth => oldDepth + 1))} />
        </div>
    );
}

const handleMouseDown = (e: React.MouseEvent, handlerFunction: () => void) => {
    e.preventDefault();
    handlerFunction();
    const interval = setInterval(handlerFunction, 100);
    const handleMouseUp = () => clearInterval(interval);
    window.addEventListener('mouseup', handleMouseUp);
};

export default function PolesSetupScreen() {
    const [pole, setPole] = useState(1);
    const [coordinates, setCoordinates] = useState({ x: 45, y: 55 });
    const [depth, setDepth] = useState(150);

    return (
        <div className='PolesSetup'>
            <Header title='Poles Setup' />
            <div className='Content'>
                <SpookyScarySkeleton />
                <div className='PolesSettings'>
                    <div className='Controls'>
                        <Switch currentPole={pole} prev={() => setPole(currentPole => (currentPole - 1) % 6 || totalPoles)} next={() => setPole(currentPole => (currentPole + 1) % 6 || totalPoles)} />
                        <PoleController coordinates={coordinates} setCoordinates={setCoordinates} depth={depth} setDepth={setDepth} />
                    </div>
                </div>
            </div>
        </div>
    );
}
