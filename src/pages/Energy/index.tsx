import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import InfoContainer from '../../components/InfoContainer';
import Switch from '../../components/Switch';
import Slider from '../../components/Slider';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';

import './Energy.less';

function HeatIcon() {
    return <div className='HeatIcon' />;
}

function ColdIcon() {
    return <div className='ColdIcon' />;
}

function LowBattery() {
    return <div className='LowBattery' />;
}

function ChargedBattery() {
    return <div className='ChargedBattery' />;
}

export default function Energy() {
    const navigate = useNavigate();
    const [temperature, setTemperature] = useState(20);
    const [heat, setHeat] = useState(false);
    const [ac, setAc] = useState(false);
    const [lowBatteryMode, setLowBatteryMode] = useState(false);

    return (
        <div className='Energy'>
            <Header title='Energy Management - AC' helpContent={<HelpModal title='Energy Management - AC' text='This page is the place for you to set up the Air Conditioning, see how much energy is produced and how much is consumed. If you want to save some energy you may press the yellow "Power Saving Mode" button.' />} />
            <div className='Content'>
                <div className='PanelsRow'>
                    <div className='PanelInfo'>
                        <div className='InfoTitle'>Solar Panel I</div>
                        <div className='PanelIcon' />
                        <div className='InfoDescription'>
                            <div className='Info'>Sun Exposure:</div>
                            <div className='Green'>93%</div>
                        </div>
                    </div>
                    <div className='PanelInfo'>
                        <div className='InfoTitle'>Solar Panel II</div>
                        <div className='PanelIcon' />
                        <div className='InfoDescription'>
                            <div className='Info'>Sun Exposure:</div>
                            <div className='Yellow'>71%</div>
                        </div>
                    </div>
                    <div className='PanelInfo'>
                        <div className='InfoTitle'>Solar Panel III</div>
                        <div className='PanelIcon' />
                        <div className='InfoDescription'>
                            <div className='Info'>Sun Exposure:</div>
                            <div className='Red'>43%</div>
                        </div>
                    </div>
                </div>
                <div className='Settings'>
                    <InfoContainer>
                        <div className='InfoTitle'>Energy</div>
                        <div className='InfoDescription'>
                            <span className='EnergyIcon' />
                            <div className='Info'>Current energy capacity is:</div>
                            <span>1KW</span>
                        </div>
                        <div className='InfoDescription'>
                            <span className='EnergyIcon' />
                            <div className='Info'>Current energy consumption is:</div>
                            <span>0.5KW</span>
                        </div>
                        <div className='InfoDescription'>
                            <div className='Green'>Energy is Enough!</div>
                            <Switch on={lowBatteryMode} setOnOff={setLowBatteryMode} onIcon={<LowBattery />} offIcon={<ChargedBattery />} onColor={'#F0B40A'} offColor='#24D459' />
                        </div>
                    </InfoContainer>
                    <InfoContainer>
                        <div className='InfoTitle'><div className='SwitchWrapper'>
                            AC
                            <Switch on={ac} setOnOff={setAc} />
                        </div>
                        </div>
                        <div className='Controls'>
                            <div className='InfoDescription'>
                                <Switch on={heat} setOnOff={setHeat} onIcon={<HeatIcon />} offIcon={<ColdIcon />} onColor='#ff6666' offColor='#6699ff' />
                                <div className='WindIcon' /></div>
                            <div className='InfoDescription'>
                                <Slider value={temperature} setValue={updatedTemperature => setTemperature(updatedTemperature)} minValue={12} maxValue={30} type='°C' />
                                <div className='ThermometerIcon' />
                            </div>
                        </div>
                    </InfoContainer>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}
