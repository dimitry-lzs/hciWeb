import React, { useState } from 'react';
import Header from '../../components/Header';

import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import { useNavigate } from 'react-router-dom';
import Select from '../../components/Select';
import Radio from '../../components/Radio';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';

import './SpecialOccasions.less';
import LightBulb from '../../components/LSDLamp';

const radioOptions = [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'yellow', label: 'Yellow Stone' },
    { value: 'hamBlue', label: 'Hamlindigo Blue' }
];

const presets = [
    { value: 'party', label: 'Party' },
    { value: 'concert', label: 'Concert' },
    { value: 'sport', label: 'Sport event' }
];
const lightPatern = [
    { value: 'random', label: 'Random' },
    { value: 'slow', label: 'Slow' },
    { value: 'fast', label: 'Fast' }
];
const colorPattern = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'rainbow', label: 'Rainbow' }
];

function BulbColors({ selectedColor, setSelectedColor }: {
    selectedColor: string;
    setSelectedColor: (color: string) => void;
}) {
    return <Radio options={radioOptions} selectedValue={selectedColor} onChange={setSelectedColor} />;
}

export default function SpecialOccasions() {
    const navigate = useNavigate();

    const [color1, setColor1] = useState('blue');
    const [color2, setColor2] = useState('green');
    const [color3, setColor3] = useState('purple');

    const [selectedPreset, setSelectedPreset] = useState('party');
    const [selectedLightPattern, setSelectedLightPattern] = useState('random');
    const [selectedColorPattern, setSelectedColorPattern] = useState('light');

    return (
        <div className='SpecialOccasions'>
            <Header title='Special Occasions Lighting' helpContent={
                <HelpModal title='Special Lighting Help'>
                    <ul>
                        <li>Select a <strong>preset</strong> (e.g., Party Mode, Concert Mode). </li>
                        <li>Settings like <strong>colors and effects</strong> auto-fill. </li>
                        <li>Adjust them manually if needed. </li>
                        <li>Click <strong>Save Changes</strong> to apply.</li>
                    </ul>
                </HelpModal>
            } />            <div className='Content'>
                <div className='Controls'>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Presets:</div>
                            <Select options={presets} onSelect={setSelectedPreset} />
                        </div>
                        <LightBulb color={color1} />
                        <div className='RadioOptions'>
                            <BulbColors selectedColor={color1} setSelectedColor={setColor1} />
                        </div>
                    </div>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Light Play Pattern:</div>
                            <Select options={lightPatern} onSelect={setSelectedLightPattern} />
                        </div>
                        <LightBulb color={color2} />
                        <div className='RadioOptions'>
                            <BulbColors selectedColor={color2} setSelectedColor={setColor2} />
                        </div>
                    </div>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Color Switching Pattern:</div>
                            <Select options={colorPattern} onSelect={setSelectedColorPattern} />
                        </div>
                        <LightBulb color={color3} />
                        <div className='RadioOptions'>
                            <BulbColors selectedColor={color3} setSelectedColor={setColor3} />
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
    );
}
