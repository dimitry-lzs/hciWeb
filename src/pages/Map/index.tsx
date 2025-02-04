import React from 'react';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import InfoContainer from '../../components/InfoContainer';

import './Map.less';

export default function Map() {
    return (
        <div className='CampsiteMap'>
            <Header title='Map' helpContent={
                <HelpModal title='Map Help'>
                    <h3>You are on your own! (for now)</h3>
                </HelpModal>
            } />            <div className='Content'>
                <InfoContainer>
                    <div className='ContainerItem'>
                        <div className='LocationIcon' />
                        <div className='LocationText'>Campsite</div>
                    </div>
                </InfoContainer>
                <div className='Center'>
                    <div className='CampMap' />
                    <InfoContainer>
                        <div className='LocationDescription'>
                            This is a very interesting place to have certain fun.
                        </div>
                    </InfoContainer>
                </div>
                <InfoContainer>
                    <div className='ContainerItem'>
                        <div className='ItemText'>Fr. 15 Aug, 14:34</div>
                    </div>
                    <div className='ContainerItem'>
                        <div className='ItemIcon sun' />
                        <div className='ItemText'>Tent</div>
                    </div>
                    <div className='ContainerItem'>
                        <div className='ItemIcon drops' />
                        <div className='ItemText'>Tent</div>
                    </div>
                    <div className='ContainerItem'>
                        <div className='ItemIcon thermometer' />
                        <div className='ItemText'>32C</div>
                    </div>
                </InfoContainer>
            </div>
        </div>
    );
}
