import React, { useState } from 'react';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import { useNavigate } from 'react-router-dom';
import Select from '../../components/Select';
import './SpecialOccasions.less';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import Radio from '../../components/Radio';

export default function SpecialOccasions() {
    const navigate = useNavigate();
    const presets = [
        { value: 'party', label: 'Party' },
        { value: 'concert', label: 'Concert' },
        { value: 'sport', label: 'Sport event' },
    ];
    const lightPatern = [
        { value: 'random', label: 'Random' },
        { value: 'slow', label: 'Slow' },
        { value: 'fast', label: 'Fast' },
    ];
    const colorPattern = [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'rainbow', label: 'Rainbow' },
    ];
    const radioOptions = [
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'yellow', label: 'Yellow Stone' },
        { value: 'hamBlue', label: 'Hamlindigo Blue' },
    ];

    const [selectedValue, setSelectedValue] = useState(radioOptions[0].value);

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };
    return (
        <div className='SpecialOccasions'>
            <Header title='Smart Camp Special Occasions' helpContent={<HelpModal title='Special Occasions' text='You may select one of the preset lighting options by interacting with the "Presets" dropdown menu. Once you have selected a preset, you are still able to make some changes on the settings displayed on the menu. When you are satisfied with the lighting, you may click "Save Changes" button. (Note: As you experiment with the lighting settings, the digital lamps on the screen will help you decide what suits you best.)' />} />
            <div className='Content'>
                <div className='Controls'>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Presets:</div><Select options={presets} />
                        </div>
                        <div className='BlueLightBulb' />
                        <div className='RadioOptions'>
                            <Radio options={radioOptions} selectedValue={selectedValue} onChange={handleRadioChange} />
                        </div>
                    </div>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Light Play Pattern:</div><Select options={lightPatern} />
                        </div>
                        <div className='PurpleLightbulb' />
                        <div className='RadioOptions'>
                            <Radio options={radioOptions} selectedValue={selectedValue} onChange={handleRadioChange} />
                        </div>
                    </div>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Color Switching Pattern:</div><Select options={colorPattern} />
                        </div>
                        <div className='GreenLightbulb' />
                        <div className='RadioOptions'>
                            <Radio options={radioOptions} selectedValue={selectedValue} onChange={handleRadioChange} />
                        </div>
                    </div>
                    <div className='ButtonContainer'>
                        <ConfirmButton text='Confirm Changes' icon={ButtonIcon.Tick} color={ButtonColor.Green} />
                    </div>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    )
}