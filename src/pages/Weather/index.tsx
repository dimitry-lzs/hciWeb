import React from 'react';
import './Weather.less';
import MenuButton, { MenuButtonIcon } from '../../components/MenuButton';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';
import { useNavigate } from 'react-router-dom';

export default function Weather() {
    const navigate = useNavigate();
    return (
        <div className='Weather'>
            <Header title='Weather' helpContent={<HelpModal title='Weather' text='Here you can be informed about the weather. If you decide you want to change your cloths placement, click on the button bellow!' />} />
            <div className='Content'>
                <div className='ConditionTitle'>Condition:</div>
                <div className='ConditionInfo'>Partly Cloudy<span className='ConditionIcon'></span></div>
                <div className='WeatherDetails'>
                    <InfoContainer>
                        <div className='Info'>
                        <span className='TemperatureIcon'></span>
                        <InfoRow label='Current Temperature:' value='27°C'/>
                        </div>
                        <div className='Info'>
                        <span className='HumidityIcon'></span>
                        <InfoRow label='Humidity:' value='93%' />
                        </div>
                        <div className='Info'>
                        <span className='WindIcon'></span>
                        <InfoRow label='Wind:' value='17 km/h' />
                        <span className='ArrowIcon'></span>
                        </div>
                    </InfoContainer>
                </div>
                <div className='Button'>
                    <MenuButton icon={MenuButtonIcon.Cloths} title='Cloths Adjustment' link='/cloths-setup' />
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}