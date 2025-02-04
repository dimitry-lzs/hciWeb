import React, { useState } from 'react';
import './CustomLighting.less';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import Slider from '../../components/Slider';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';

import { useNavigate } from 'react-router-dom';
import SoberLamp from '../../components/SoberLamp';

export default function CustomLighting() {
    const navigate = useNavigate();
    const [brightness, setBrightness] = useState(700);
    const [warmth, setWarmth] = useState(4000);

    const applySuggestedSettings = () => {
        setBrightness(1500);
        setWarmth(3000);
    };

    return (
        <div className='CustomLighting'>
            <Header title='Custom Lighting' helpContent={
                <HelpModal title='Custom Lighting Help'>
                    <ul>
                        <li>Adjust <strong>Brightness</strong> and <strong>Warmth</strong> using sliders. </li>
                        <li>A <strong>virtual lamp</strong> previews your changes. </li>
                        <li>Click <strong>Save Settings</strong> to confirm. </li>
                        <li>For automatic setup, tap <strong>Apply Suggestions</strong>.</li>
                    </ul>
                </HelpModal>
            } />
            <div className='Content'>
                <div className='SettingsContainer'>
                    <SoberLamp warmth={warmth} brightness={brightness} />
                    <div className='LightingControls'>
                        <div className='SliderContainer'>
                            <div className='SliderTitle'>Brightness</div>
                            <div className='SliderWrapper'>
                                <div className='SliderText'>Dark</div>
                                <div className='Slider'><Slider minValue={100} maxValue={2000} type='lm' value={brightness} setValue={setBrightness} /></div>
                                <div className='SliderText'>Bright</div>
                            </div>
                        </div>
                        <div className='SliderContainer'>
                            <div className='SliderTitle'>Warmth</div>
                            <div className='SliderWrapper'>
                                <div className='SliderText'>Warm</div>
                                <div className='Slider'><Slider minValue={2600} maxValue={6500} type='K' value={warmth} setValue={setWarmth} /></div>
                                <div className='SliderText'>Cool</div>
                            </div>
                        </div>
                        <div className='Buttons'>
                            <ConfirmButton text='Save settings' icon={ButtonIcon.Tick} color={ButtonColor.Green} onClick={() => navigate('/')} />
                            <ConfirmButton text='Apply Suggested Settings' icon={ButtonIcon.Weather} color={ButtonColor.Blue} onClick={applySuggestedSettings} />
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
