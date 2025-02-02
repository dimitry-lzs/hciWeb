import React, { useMemo, useState } from 'react';

import Header from '../../components/Header';
import SpookyScarySkeleton from './SpookyScarySkeleton';

import './PolesSetup.less';
import HelpModal from '../../components/HelpModal';
import InfoContainer from '../../components/InfoContainer';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import BackButton from '../../components/BackButton';
import { useNavigate } from 'react-router-dom';

const totalPoles = 6;

interface Coordinates {
    'one': { x: number, y: number, depth: number },
    'two': { x: number, y: number, depth: number },
    'three': { x: number, y: number, depth: number },
    'four': { x: number, y: number, depth: number },
    'five': { x: number, y: number, depth: number },
    'six': { x: number, y: number, depth: number }
}

const enum Poles {
    one = 'one',
    two = 'two',
    three = 'three',
    four = 'four',
    five = 'five',
    six = 'six'
}

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

function PoleController({ coordinates, setCoordinates, selectedPole }: { coordinates: Coordinates, selectedPole: keyof Coordinates, setCoordinates: (update: (coordinates: Coordinates) => Coordinates) => void }) {
    return (
        <div className='PoleControls'>
            <div className='PoleArrow left' onMouseDown={(event) => handleMouseDown(event, () => {
                setCoordinates((oldCoordinates: Coordinates) => ({ ...oldCoordinates, [selectedPole]: { ...oldCoordinates[selectedPole], x: oldCoordinates[selectedPole].x - 1 } }));
            })} />
            <div className='PoleArrow right' onMouseDown={(event) => handleMouseDown(event, () => {
                setCoordinates((oldCoordinates: Coordinates) => ({ ...oldCoordinates, [selectedPole]: { ...oldCoordinates[selectedPole], x: oldCoordinates[selectedPole].x + 1 } }));
            })} />
            <div className='PoleArrow forward' onMouseDown={(event) => handleMouseDown(event, () => {
                setCoordinates((oldCoordinates: Coordinates) => ({ ...oldCoordinates, [selectedPole]: { ...oldCoordinates[selectedPole], y: oldCoordinates[selectedPole].y - 1 } }));
            })} />
            <div className='PoleArrow backward' onMouseDown={(event) => handleMouseDown(event, () => {
                setCoordinates((oldCoordinates: Coordinates) => ({ ...oldCoordinates, [selectedPole]: { ...oldCoordinates[selectedPole], y: oldCoordinates[selectedPole].y + 1 } }));
            })} />
            <div className='Reset'
                onClick={() => {
                    setCoordinates(oldCoordinates => ({ ...oldCoordinates, [selectedPole]: { ...oldCoordinates[selectedPole], x: 50, y: 50 } }));
                }} />
            <div className='PoleCoordinate x'>{coordinates[selectedPole].x}</div>
            <div className='PoleCoordinate y'>{coordinates[selectedPole].y}</div>
            <div className='PoleArrow up' onMouseDown={(event) => handleMouseDown(event, () => {
                setCoordinates((oldCoordinates: Coordinates) => ({ ...oldCoordinates, [selectedPole]: { ...oldCoordinates[selectedPole], depth: oldCoordinates[selectedPole].depth - 1 } }));
            })} />
            <div className='PoleDepth'>{`${coordinates[selectedPole].depth}mm`}</div>
            <div className='PoleArrow down' onMouseDown={(event) => handleMouseDown(event, () => {
                setCoordinates((oldCoordinates: Coordinates) => ({ ...oldCoordinates, [selectedPole]: { ...oldCoordinates[selectedPole], depth: oldCoordinates[selectedPole].depth + 1 } }));
            })} />
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
    const navigate = useNavigate();

    const [pole, setPole] = useState(1);

    const [coordinates, setCoordinates] = useState<Coordinates>({
        'one': { x: 45, y: 55, depth: 150 },
        'two': { x: 45, y: 55, depth: 150 },
        'three': { x: 45, y: 55, depth: 150 },
        'four': { x: 45, y: 55, depth: 150 },
        'five': { x: 45, y: 55, depth: 150 },
        'six': { x: 45, y: 55, depth: 150 }
    });

    const selectedPole = useMemo(() => {
        switch (pole) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        default: return 'one';
        }
    }, [pole]) as keyof Coordinates;

    return (
        <div className='PolesSetup'>
            <Header title='Poles Setup' helpContent={<HelpModal title='Poles Placement' text='' />} />
            <div className='Content'>
                <SpookyScarySkeleton selectedPole={pole as keyof {}} />
                <div className='PolesSettings'>
                    <div className='Controls'>
                        <Switch currentPole={pole} prev={() => setPole(currentPole => (currentPole - 1) % 6 || totalPoles)} next={() => setPole(currentPole => (currentPole + 1) % 6 || totalPoles)} />
                        <PoleController selectedPole={selectedPole} coordinates={coordinates} setCoordinates={setCoordinates} />
                    </div>
                    <div className='Parameters'>
                        <InfoContainer>
                            <div className='ParametersTitle'>Current Poles Settings</div>
                            <div className='ParametersContent'>
                                {Object.keys(coordinates).map((value, index) =>
                                    <div className='Parameter' key={index}>
                                        <div className='Pole'>{`Pole ${index + 1}`}</div>
                                        <div className='ParameterRow'>
                                            <div className='ParameterName'>X</div>
                                            <div className='ParameterValue'>{`${coordinates[value as Poles].x}`}</div>
                                        </div>
                                        <div className='ParameterRow'>
                                            <div className='ParameterName'>Y</div>
                                            <div className='ParameterValue'>{`${coordinates[value as Poles].y}`}</div>
                                        </div>
                                        <div className='ParameterRow'>
                                            <div className='ParameterName'>D</div>
                                            <div className='ParameterValue'>{`${coordinates[value as Poles].depth}mm`}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </InfoContainer>
                        <ConfirmButton color={ButtonColor.Blue} text='Apply suggested settings' icon={ButtonIcon.Settings} onClick={() => setCoordinates({
                            one: {
                                x: Math.round(Math.random() * 30) + 10,
                                y: Math.round(Math.random() * 30) + 10,
                                depth: Math.round(Math.random() * 100) + 110
                            },
                            two: {
                                x: Math.round(Math.random() * 30) + 10,
                                y: Math.round(Math.random() * 30) + 10,
                                depth: Math.round(Math.random() * 100) + 110
                            },
                            three: {
                                x: Math.round(Math.random() * 30) + 10,
                                y: Math.round(Math.random() * 30) + 10,
                                depth: Math.round(Math.random() * 100) + 110
                            },
                            four: {
                                x: Math.round(Math.random() * 30) + 10,
                                y: Math.round(Math.random() * 30) + 10,
                                depth: Math.round(Math.random() * 100) + 110
                            },
                            five: {
                                x: Math.round(Math.random() * 30) + 10,
                                y: Math.round(Math.random() * 30) + 10,
                                depth: Math.round(Math.random() * 100) + 110
                            },
                            six: {
                                x: Math.round(Math.random() * 30) + 10,
                                y: Math.round(Math.random() * 30) + 10,
                                depth: Math.round(Math.random() * 100) + 110
                            }
                        })} />
                        <ConfirmButton color={ButtonColor.Green} text='Save Settings' icon={ButtonIcon.Tick} onClick={() => navigate('/')} />
                    </div>
                </div>
            </div>
            <div className='NavigationButton'>
                <BackButton navigate={() => navigate(-1)} />
            </div>
        </div>
    );
}
