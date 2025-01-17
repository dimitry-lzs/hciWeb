import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';
import BackButton from '../../components/BackButton';

import './TentPosition.less';

export default function TentPosition() {
    const navigate = useNavigate();

    return (
        <div>
            <Header title='Tent Position' helpContent={<HelpModal title='Tent Positioning' text='Click where in the map you would like to place your tent. You may take advice from each spots unique characteristics.' />}/>
            <div className='Content'>
                <div className='MapContainer'>
                    <div className='Map'>
                        <div className='MapPoint first' />
                        <div className='MapPoint second' />
                        <div className='MapPoint third' />
                        <div className='MapPoint fourth' />
                    </div>
                    <div className='MapControls'>
                        <InfoContainer>
                            <InfoRow label='Chosen point:' value='74,54501° N, 8,41251° W' />
                            <InfoRow label='Soil Stability:' value='The ground here is stable, providing a firm foundation.' />
                            <InfoRow label='Chosen point:' value='74,54501° N, 8,41251° W' />
                            <InfoRow label='Sun Exposure:' value='This area receives ample sunlight throughout the day.' />
                        </InfoContainer>
                        <ConfirmButton icon={ButtonIcon.Tick} color={ButtonColor.Green} />
                    </div>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}
