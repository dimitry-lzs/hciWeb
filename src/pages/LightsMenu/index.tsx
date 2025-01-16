import React from 'react';
import './LightsMenu.less';
import MenuButton, { MenuButtonIcon } from '../../components/MenuButton';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import {useNavigate } from 'react-router-dom';

export default function LightsMenu() {
    const navigate = useNavigate();
    return (
        <div className='LightsMenu'>
            <Header title='Smart Camp Lighting' />
            <div className='Content'>
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