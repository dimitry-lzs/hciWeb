import React from 'react';

import Header from '../../components/Header';
import SpookyScarySkeleton from './SpookyScarySkeleton';

import './PolesSetup.less';

export default function PolesSetupScreen() {
    return (
        <div className='PolesSetup'>
            <Header title='Poles Setup' />
            <div className='Content'>
                <SpookyScarySkeleton />
            </div>
        </div>
    );
}
