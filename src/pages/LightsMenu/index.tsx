import React from 'react';
import './LightsMenu.less';
import MenuButton, { MenuButtonIcon } from '../../components/MenuButton';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import { useNavigate } from 'react-router-dom';

export default function LightsMenu() {
    const navigate = useNavigate();
    return (
        <div className='LightsMenu'>
            <Header title='Lights Menu' helpContent={
                <HelpModal title='Lights Menu Help'>
                    <ul>
                        <li>Choose <strong>Custom Settings</strong> to adjust lights manually. </li>
                        <li>Select <strong>Special Occasions</strong> to setup lighting for special occasions (concerts, sporting events, eg.). </li>
                        <li>Tap the corresponding button to proceed.</li>
                    </ul>
                </HelpModal>
            } />            <div className='Content'>
                <div className='Menu'>
                    <div className='ButtonsRow'>
                        <MenuButton icon={MenuButtonIcon.Lightbulb} title='Custom Lighting' link='/custom-lighting' />
                        <MenuButton icon={MenuButtonIcon.SpecialOccasions} title='Special Occasions' link='/special-occasions' />
                    </div>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
};