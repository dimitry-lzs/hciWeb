import React, { useEffect, useMemo, useState } from 'react';
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
    { value: 'party', label: 'Party', lightPatern: 'random', colorPattern: 'rainbow' },
    { value: 'concert', label: 'Concert', lightPatern: 'fast', colorPattern: 'light' },
    { value: 'funeral', label: 'Funeral', lightPatern: 'slow', colorPattern: 'dark' }
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

    const [selectedColors, setSelectedColors] = useState([color1, color2, color3]);

    const [selectedPreset, setSelectedPreset] = useState('party');
    const [selectedLightPattern, setSelectedLightPattern] = useState('random');
    const [selectedColorPattern, setSelectedColorPattern] = useState('light');

    const animationDelay = useMemo(() => {
        switch (selectedLightPattern) {
        case 'slow':
            return 1e3;
        case 'fast':
            return 500;
        default:
            return Math.round(Math.random() * 1e3 + 500);
        }
    }, [selectedLightPattern]);

    useEffect(() => {
        switch (selectedColorPattern) {
        case 'light':
            setColor1('green');
            setColor2('yellow');
            setColor3('purple');
            break;
        case 'dark':
            setColor1('purple');
            setColor2('blue');
            setColor3('hamBlue');
            break;
        case 'rainbow':
            setColor1('green');
            setColor2('blue');
            setColor3('purple');
            break;
        }
    }, [selectedColorPattern]);

    useEffect(() => {
        const preset = presets.find(pr => pr.value === selectedPreset);
        if (preset) {
            setSelectedColorPattern(preset.colorPattern);
            setSelectedLightPattern(preset.lightPatern);
        }
    }, [selectedPreset]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const [firstColor, secondColor, thirdColor] = selectedColors;
            setSelectedColors([secondColor, thirdColor, firstColor]);
        }, animationDelay);
        return () => clearTimeout(timer);
    }, [selectedColors, animationDelay]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSelectedColors([color1, color2, color3]);
        }, animationDelay);

        return () => clearTimeout(timer);
    }, [color1, color2, color3, animationDelay]);

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
            } />
            <div className='Content'>
                <div className='Controls'>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Presets:</div>
                            <Select value={selectedPreset} placeHolder='Select preset' options={presets} onSelect={setSelectedPreset} />
                        </div>
                        <LightBulb color={selectedColors[0] || color1} />
                        <div className='RadioOptions'>
                            <BulbColors selectedColor={color1} setSelectedColor={setColor1} />
                        </div>
                    </div>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Light Play Pattern:</div>
                            <Select value={selectedLightPattern} placeHolder='Select light play pattern' options={lightPatern} onSelect={setSelectedLightPattern} />
                        </div>
                        <LightBulb color={selectedColors[1] || color2} />
                        <div className='RadioOptions'>
                            <BulbColors selectedColor={color2} setSelectedColor={setColor2} />
                        </div>
                    </div>
                    <div className='MenuRow'>
                        <div className='SelectMenu'>
                            <div className='Label'>Color Switching Pattern:</div>
                            <Select value={selectedColorPattern} placeHolder='Select switching pattern' options={colorPattern} onSelect={setSelectedColorPattern} />
                        </div>
                        <LightBulb color={selectedColors[2] || color3} />
                        <div className='RadioOptions'>
                            <BulbColors selectedColor={color3} setSelectedColor={setColor3} />
                        </div>
                    </div>
                    <div className='ButtonContainer'>
                        <ConfirmButton text='Confirm Changes' icon={ButtonIcon.Tick} color={ButtonColor.Green} onClick={() => navigate('/')} />
                    </div>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}
