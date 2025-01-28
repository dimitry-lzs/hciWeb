import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Big from 'big.js';

import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import InfoContainer from '../../components/InfoContainer';
import Switch from '../../components/Switch';
import Slider from '../../components/Slider';

import SolarPanel from './SolarPanel';

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

function Increase(value: number) {
    return value + 1;
}

function Decrease(value: number) {
    return value - 1;
}

function GetStepper(value: number, stepper: (value: number) => number) {
    if (value > 99) {
        return Decrease;
    }
    if (value < 1) {
        return Increase;
    }
    return stepper;
}

function RandomIntervalDelay() {
    return Math.round(Math.random() * 1000);
}

function ValueChanger(initialValue: number, valueSetter: React.Dispatch<React.SetStateAction<number>>): number {
    let stepper = Increase;
    stepper = GetStepper(initialValue, stepper);

    const interval = setInterval(() => {
        valueSetter((oldValue: number) => {
            stepper = GetStepper(oldValue, stepper);
            const newValue = stepper(oldValue);
            return newValue;
        });
    }, RandomIntervalDelay());

    return interval as unknown as number;
}

export default function Energy() {
    const navigate = useNavigate();
    const [temperature, setTemperature] = useState(20);
    const [heat, setHeat] = useState(false);
    const [ac, setAc] = useState(false);
    const [lowBatteryMode, setLowBatteryMode] = useState(false);

    const [panel1Exposure, setPanel1Exposure] = useState(Math.round(Math.random() * 100));
    const [panel2Exposure, setPanel2Exposure] = useState(Math.round(Math.random() * 100));
    const [panel3Exposure, setPanel3Exposure] = useState(Math.round(Math.random() * 100));

    const totalEnergy = useMemo(() => new Big(350).mul(
        new Big(new Big(panel1Exposure).div(100))
            .add(new Big(panel2Exposure).div(100))
            .add(new Big(panel3Exposure).div(100))
    ).round(2), [panel1Exposure, panel2Exposure, panel3Exposure]);

    const switchAc = useCallback((on: boolean) => {
        setAc(on);
        if (on) {
            setLowBatteryMode(false);
        }
    }, []);

    const switchLowBatteryMode = useCallback((on: boolean) => {
        setLowBatteryMode(on);
        if (on) {
            setAc(false);
        }
    }, []);

    const energyConsumption = useMemo(() => {
        return new Big(lowBatteryMode ? 50 : 100).add(
            ac
                ? new Big(temperature).mul(30)
                : 0).round(2);
    }, [ac, lowBatteryMode, temperature]);

    useEffect(() => {
        const interval1 = ValueChanger(panel1Exposure, setPanel1Exposure);
        const interval2 = ValueChanger(panel2Exposure, setPanel2Exposure);
        const interval3 = ValueChanger(panel3Exposure, setPanel3Exposure);
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <div className='Energy'>
            <Header title='Energy Management - AC' helpContent={<HelpModal title='Energy Management - AC' text='This page is the place for you to set up the Air Conditioning, see how much energy is produced and how much is consumed. If you want to save some energy you may press the yellow "Power Saving Mode" button.' />} />
            <div className='Content'>
                <div className='PanelsRow'>
                    <SolarPanel sunExposure={panel1Exposure} label='I' />
                    <SolarPanel sunExposure={panel2Exposure} label='II' />
                    <SolarPanel sunExposure={panel3Exposure} label='III' />
                </div>
                <div className='Settings'>
                    <InfoContainer>
                        <div className='InfoTitle'>Energy</div>
                        <div className='InfoDescription'>
                            <span className='EnergyIcon' />
                            <div className='Info'>Current energy capacity is:</div>
                            <span className='Value'>{`${totalEnergy}W`}</span>
                        </div>
                        <div className='InfoDescription'>
                            <span className='EnergyIcon' />
                            <div className='Info'>Current energy consumption is:</div>
                            <span className='Value'>{`${energyConsumption}W`}</span>
                        </div>
                        <div className='InfoDescription'>
                            {totalEnergy.gte(energyConsumption) ? <div className='Green'>Energy is Enough!</div> : <div className='Red'>Energy is not Enough!</div>}
                            <Switch on={lowBatteryMode} setOnOff={switchLowBatteryMode} onIcon={<LowBattery />} offIcon={<ChargedBattery />} onColor={'#F0B40A'} offColor='#24D459' />
                        </div>
                    </InfoContainer>
                    <InfoContainer>
                        <div className='InfoTitle'><div className='SwitchWrapper'>
                            AC
                            <Switch on={ac} setOnOff={switchAc} />
                        </div>
                        </div>
                        <div className='Controls'>
                            <div className='InfoDescription'>
                                <Switch disabled={lowBatteryMode || !ac} on={heat} setOnOff={setHeat} onIcon={<HeatIcon />} offIcon={<ColdIcon />} onColor='#ff6666' offColor='#6699ff' />
                                <div className='WindIcon' /></div>
                            <div className='InfoDescription'>
                                <Slider disabled={lowBatteryMode || !ac} value={temperature} setValue={updatedTemperature => setTemperature(updatedTemperature)} minValue={12} maxValue={30} type='°C' />
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
