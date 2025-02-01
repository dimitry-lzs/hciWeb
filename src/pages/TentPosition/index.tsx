import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';
import BackButton from '../../components/BackButton';

import './TentPosition.less';

interface Coordinates {
    x: number | null,
    y: number | null
}

function IndecentExposure(coordinates: Coordinates): string {
    if (coordinates.x === null || coordinates.y === null) return '';
    const value = coordinates.y % 150;
    if (value < 50) return 'This area is very dark and cold. For mold and moss lovers.';
    if (value < 100) return 'This area receives some sunlight. For those who like a bit of shade.';
    if (value <= 150) return 'This area receives ample sunlight throughout the day. For sunburn lovers.';
    return '';
}

function MentalStability(coordinates: Coordinates): string {
    if (coordinates.x === null || coordinates.y === null) return '';
    const value = coordinates.x % 150;
    if (value < 50) return 'This area is very unstable. A swamp. For those who like to live dangerously.';
    if (value < 100) return 'Earthquakes are common in this area. For people who can hold a balance.';
    if (value <= 150) return 'This area is very stable. For those who are measuring their coffee with a thermometer before sipping it to avoid burns.';
    return '';
}

function Map({ chosenCoordinates, hoverCoordinates, chooseCoordinates }: { chosenCoordinates: Coordinates, hoverCoordinates: (newCoordinates: Coordinates) => void, chooseCoordinates: (newCoordinates: Coordinates) => void }) {
    useEffect(() => {
        const SetCoordinates = (Setter: (newCoordinates: Coordinates) => void) => (event: MouseEvent) => Setter({
            x: event.clientX - (event.currentTarget as HTMLElement).getBoundingClientRect().left,
            y: event.clientY - (event.currentTarget as HTMLElement).getBoundingClientRect().top
        });

        const hoverHandler = SetCoordinates(hoverCoordinates);
        const clickHandler = SetCoordinates(chooseCoordinates);

        const map = document.getElementById('Map');
        map?.addEventListener('mousemove', hoverHandler);
        map?.addEventListener('click', clickHandler);

        return () => {
            map?.removeEventListener('mousemove', hoverHandler);
            map?.removeEventListener('click', clickHandler);
        };

    }, []);

    return <div className='Map' id='Map'>
        <div className='chosenPoint' style={{ top: chosenCoordinates.y ?? '0', left: chosenCoordinates.x ?? '0', display: !chosenCoordinates.y || !chosenCoordinates.y ? 'none' : 'block' }} />
        <div className='MapPoint first' />
        <div className='MapPoint second' />
        <div className='MapPoint third' />
        <div className='MapPoint fourth' />
    </div>;
}

export default function TentPosition() {
    const navigate = useNavigate();

    const [coordinates, setCoordinates] = useState<Coordinates>({
        x: null,
        y: null
    });

    const [chosenCoordinates, chooseCoordinates] = useState<Coordinates>({
        x: null,
        y: null
    });

    return (
        <div>
            <Header title='Tent Position' helpContent={<HelpModal title='Tent Positioning' text='Click where in the map you would like to place your tent. You may take advice from each spots unique characteristics.' />} />
            <div className='Content tentPosition'>
                <div className='MapContainer'>
                    <Map chosenCoordinates={chosenCoordinates} hoverCoordinates={setCoordinates} chooseCoordinates={chooseCoordinates} />
                    <div className='MapControls'>
                        <InfoContainer>
                            <InfoRow label='Point:' value={`${coordinates.x ?? ''}° N ${coordinates.y ?? ''}° W`} />
                            <InfoRow label='Soil Stability:' value={MentalStability(coordinates)} />
                            <InfoRow label='Sun Exposure:' value={IndecentExposure(coordinates)} />
                            {chosenCoordinates.x && chosenCoordinates.y && (
                                <>
                                    <InfoRow label='Chosen Point:' value={`${chosenCoordinates.x ?? ''}° N ${chosenCoordinates.y ?? ''}° W`} />
                                    <InfoRow label='Soil Stability:' value={MentalStability(chosenCoordinates)} />
                                    <InfoRow label='Sun Exposure:' value={IndecentExposure(chosenCoordinates)} />
                                </>
                            )}
                        </InfoContainer>
                        {(chosenCoordinates && chosenCoordinates.y) ? <ConfirmButton text='Confirm' icon={ButtonIcon.Tick} color={ButtonColor.Green} onClick={() => navigate('/poles-setup')} /> : null}
                    </div>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}
