import React from 'react';
import Header from '../../components/Header';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';

import './TentPosition.less';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';

export default function TentPosition() {
    return (
        <div>
            <Header title='Tent Position' />
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
            </div>
        </div>
    );
}
