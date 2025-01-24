import React from 'react';

import Header from '../../components/Header';
import SpookyScarySkeleton from './SpookyScarySkeleton';

import './PolesSetup.less';

const totalPoles = 6;

function Switch({ currentPole, prev, next }: { currentPole: number, prev: () => void, next: () => void }) {
    return (
        <div className='PoleSwitch'>
            <div className='PoleLabel'>Pole</div>
            <div className='Switch'>
                <div className='PoleSwitchButton' onClick={prev} />
                <div className='PoleNumber'>{currentPole}</div>
                <div className='PoleSwitchButton right' onClick={next} />
            </div>
        </div>
    );
}

export default function PolesSetupScreen() {
    const [pole, setPole] = React.useState(1);

    return (
        <div className='PolesSetup'>
            <Header title='Poles Setup' />
            <div className='Content'>
                <SpookyScarySkeleton />
                <div className='PolesSettings'>
                    <div className='Controls'>
                        <Switch currentPole={pole} prev={() => setPole(currentPole => (currentPole - 1) % 6 || totalPoles)} next={() => setPole(currentPole => (currentPole + 1) % 6 || totalPoles)} />
                        <div className='PoleControls'>
                            <div className='PoleArrow left' />
                            <div className='PoleArrow right' />
                            <div className='PoleArrow forward' />
                            <div className='PoleArrow backwards' />
                            <div className='Reset' />
                            <div className='PoleCoordinate x'>45</div>
                            <div className='PoleCoordinate y'>55</div>
                            <div className='PoleArrow up' />
                            <div className='PoleDepth'>156mm</div>
                            <div className='PoleArrow down' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
