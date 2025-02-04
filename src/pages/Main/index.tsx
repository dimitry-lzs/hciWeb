import React from 'react';

import MenuButton, { MenuButtonIcon } from '../../components/MenuButton';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';

import './Main.less';

export default function MainScreen() {
    return (
        <div>
            <Header title='TsaDiree - Main Menu' helpContent={
                <HelpModal title='Main Menu Help'>
                    <p>Select a feature by clicking its button: </p>
                    <ul>
                        <li><strong>Tent Setup</strong> – Instructions for setting up your tent. </li>
                        <li><strong>Protective Cloths</strong> – Guide for placing protective covers. </li>
                        <li><strong>Lighting</strong> – Adjust brightness and settings. </li>
                        <li><strong>Energy Management - AC</strong> – Control power usage and air conditioning. </li>
                        <li><strong>Weather</strong> – Check real-time weather updates. </li>
                        <li><strong>Activities</strong> – Explore available campsite activities.</li>
                        <li><strong>Order Food</strong> – Order your food, chat with the staff.</li>
                        <li><strong>Map</strong> – Explore the map of the campsite, use the GPS.</li>
                    </ul>
                </HelpModal>
            } />            <div className='Content'>
                <div className='Title'>Main Menu</div>
                <div className='Menu'>
                    <div className='ButtonsRow'>
                        <MenuButton title='Tent setup' icon={MenuButtonIcon.TentSetup} link='/tent-position' />
                        <MenuButton title='Cloths' icon={MenuButtonIcon.Cloths} link='/cloths-setup' />
                        <MenuButton title='Lighting' icon={MenuButtonIcon.Lighting} link='/lighting' />
                    </div>
                    <div className='ButtonsRow'>
                        <MenuButton title='Energy' icon={MenuButtonIcon.Energy} link='/energy' />
                        <MenuButton title='Weather' icon={MenuButtonIcon.Weather} link='/weather' />
                        <MenuButton title='Activities' icon={MenuButtonIcon.Activities} link='/activities' />
                    </div>
                    <div className='ButtonsRow'>
                        <MenuButton title='Order Food' icon={MenuButtonIcon.Efood} link='/efood' />
                        <MenuButton title='Map' icon={MenuButtonIcon.Map} link='/map' />
                    </div>
                </div>
            </div>
        </div>
    );
}
