import React from 'react';
import './Main.less';

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
                        <div className='MenuButton'>
                            <div className='ButtonTitle'>Tent setup</div>
                            <div className='ButtonIcon tentSetup' />
                        </div>
                        <div className='MenuButton'>
                            <div className='ButtonTitle'>Cloths</div>
                            <div className='ButtonIcon cloths' />
                        </div>
                        <div className='MenuButton'>
                            <div className='ButtonTitle'>Lighting</div>
                            <div className='ButtonIcon lighting' />
                        </div>
                    </div>
                    <div className='ButtonsRow'>
                        <div className='MenuButton'>
                            <div className='ButtonTitle'>Energy / AC</div>
                            <div className='ButtonIcon energy' />
                        </div>
                        <div className='MenuButton'>
                            <div className='ButtonTitle'>Weather</div>
                            <div className='ButtonIcon weather' />
                        </div>
                        <div className='MenuButton'>
                            <div className='ButtonTitle'>Activities</div>
                            <div className='ButtonIcon activities' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
