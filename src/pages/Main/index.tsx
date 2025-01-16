import React from 'react';
import './Main.less';
import MenuButton, { MenuButtonIcon } from '../../components/MenuButton';

export default function MainScreen() {
    return (
        <div>
            <div className='Header'>
                <div className='PageTitle'>
                    <div className='Logo' />
                    Main Screen
                </div>
            </div>
            <div className='Content'>
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
                </div>
            </div>
        </div>
    );
}
