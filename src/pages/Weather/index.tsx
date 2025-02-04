import React, { useState, useEffect } from 'react';
import './Weather.less';
import MenuButton, { MenuButtonIcon } from '../../components/MenuButton';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';
import { useNavigate } from 'react-router-dom';

export default function Weather() {
    const navigate = useNavigate();
    const [temperature, setTemperature] = useState(25);
    const [humidity, setHumidity] = useState(80);
    const [wind, setWind] = useState(15);

    useEffect(() => {
        setTemperature(Math.floor(Math.random() * (35 - 15 + 1)) + 15); 
        setHumidity(Math.floor(Math.random() * (100 - 50 + 1)) + 50); 
        setWind(Math.floor(Math.random() * (30 - 5 + 1)) + 5); 
    }, []);
    
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
                        <div className="InfoTitle">Temperature:</div><div className='InfoWeather'> {temperature}C</div>
                        </div>
                        <div className='Info'>
                        <span className='HumidityIcon'></span>
                        <div className="InfoTitle">Humidity:</div><div className='InfoWeather'> {humidity}%</div>
                        </div>
                        <div className='Info'>
                        <span className='WindIcon'></span>
                        <div className="InfoTitle">Wind:</div><div className='InfoWeather'> {wind}km/h</div>
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