import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import NakedSkeleton, { SkeletonClothes } from './NakedSkeleton';
import BackButton from '../../components/BackButton';

import './ClothsSetup.less';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import HelpModal from '../../components/HelpModal';

export enum ClothPosition {
    good = 'good',
    susceptibleToPrecipitation = 'susceptibleToPrecipitation',
    invalid = 'invalid'
}

function ValidityMessage(positionValidity: ClothPosition) {
    switch (positionValidity) {
        case ClothPosition.good:
            return <div className='PositionMessage good'>Good Position <div className='greenTick' /></div>;
        case ClothPosition.susceptibleToPrecipitation:
            return <div className='PositionMessage susceptibleToPrecipitation'>Susceptible to Precipitation: For those who like to get wet.</div>;
        case ClothPosition.invalid:
            return <div className='PositionMessage invalid'>Position is invalid.</div>;
    }
}
export default function ClothsSetupScreen() {
    const navigate = useNavigate();
    const [positionValidity, setPositionValidity] = useState<ClothPosition>(ClothPosition.invalid);
    const [autoPosition, setAutoPosition] = useState<boolean>(false);

    return (
        <div className='ClothsSetup'>
            <Header title='Cloths Setup' helpContent={
                <HelpModal title='Cloths Setup Help'>
                    <ul>
                        <li><strong>Drag &amp; drop</strong> the cloth to your desired location. </li>
                        <li>The system will validate your placement. </li>
                        <li>If needed, adjust until it meets requirements. </li>
                        <li>Click <strong>Save Changes</strong> to confirm. </li>
                        <li>For automatic placement, tap <strong>Apply Suggested Settings</strong>.</li>
                    </ul>
                </HelpModal>
            } />
            <div className='Content'>
                <NakedSkeleton />
                <SkeletonClothes setPositionValidity={setPositionValidity} autoPosition={autoPosition} setAutoPosition={setAutoPosition} />
                <div className='ClothsSettings'>
                    {ValidityMessage(positionValidity)}
                    <ConfirmButton color={ButtonColor.Blue} text='Apply suggested settings' icon={ButtonIcon.Weather} onClick={() => setAutoPosition(true)} />
                    {positionValidity !== ClothPosition.invalid
                        ? (
                            <ConfirmButton color={ButtonColor.Green} text='Save changes' icon={ButtonIcon.Tick} onClick={() => navigate('/')} />
                        )
                        : <div style={{ height: '42px' }} />}
                </div>
            </div>
            <div className='NavigationButton'>
                <BackButton navigate={() => navigate(-1)} />
            </div>
        </div>
    );
}
