import React from 'react';
import './CustomLighting.less';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import Slider from '../../components/Slider';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';


import { useNavigate } from 'react-router-dom';

export default function CustomLighting() {
    const navigate = useNavigate();
    return (
        <div className='CustomLighting'>
            <Header title='Custom Lighting Settings' helpContent={<HelpModal title='Custom Lighting' text='Use the sliders to customly adjust the lighting.' />} />
            <div className='Content'>
                <div className='SettingsContainer'>
                    <div className='LightBulb' />
                    <div className='LightingControls'>
                        <div className='SliderContainer'>
                            <div className='SliderTitle'>Brightness</div>
                            <div className='SliderWrapper'>
                                <div className='SliderText'>Dark</div>
                                <div className='Slider'><Slider minValue={100} maxValue={2000} type='lm' /></div>
                                <div className='SliderText'>Bright</div>
                            </div>
                        </div>
                        <div className='SliderContainer'>
                            <div className='SliderTitle'>Warmth</div>
                            <div className='SliderWrapper'>
                                <div className='SliderText'>Warm</div>
                                <div className='Slider'><Slider minValue={2600} maxValue={6500} type='K' /></div>
                                <div className='SliderText'>Cool</div>
                            </div>
                        </div>
                        <div className='Buttons'>
                            <ConfirmButton icon={ButtonIcon.Tick} color={ButtonColor.Green} />
                            <ConfirmButton icon={ButtonIcon.Weather} color={ButtonColor.Blue} />
                        </div>
                    </div>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}