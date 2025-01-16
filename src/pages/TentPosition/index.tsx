import React from 'react';
import Header from '../../components/Header';

import './TentPosition.less';

export default function TentPosition() {
    return (
        <div>
            <Header title='Tent Position' />
            <div className='Content'>
                <div className='MapContainer'>
                    <div className='Map'>
                        <div className='MapPoint first' />
                        <div className='MapPoint second' />
                        <div className='MapPoint third' />
                        <div className='MapPoint fourth' />
                    </div>
                    <div className='MapControls'>
                        <div className='InfoContainer'>
                            <div className='InfoRow'>
                                <div className='InfoLabel'>Chosen point:</div>
                                <div className='InfoValue'>74,54501° N, 8,41251° W</div>
                            </div>
                            <div className='InfoRow'>
                                <div className='InfoLabel'>Soil Stability:</div>
                                <div className='InfoValue'>The ground here is stable, providing a firm foundation.</div>
                            </div>
                            <div className='InfoRow'>
                                <div className='InfoLabel'>Chosen point:</div>
                                <div className='InfoValue'>74,54501° N, 8,41251° W</div>
                            </div>
                            <div className='InfoRow'>
                                <div className='InfoLabel'>Soil Stability:</div>
                                <div className='InfoValue'>The ground here is stable, providing a firm foundation.</div>
                            </div>
                        </div>
                        <div className='ConfirmButton'>
                            Choose point
                            <div className='Icon tick' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
