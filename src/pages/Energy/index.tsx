import React from 'react';
import './Energy.less';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import { useNavigate } from 'react-router-dom';
import Select from '../../components/Select';

export default function Energy() {
    const navigate = useNavigate();
    const coldHeat = [
        { value: 'cold', label: 'Cold' },
        { value: 'heat', label: 'Heat' },
        { value: 'off', label: 'Off' },
    ];
    const temperatures = [
        { value: '16', label: '16' },
        { value: '17', label: '17' },
        { value: '18', label: '18' },
        { value: '19', label: '19' },
        { value: '20', label: '20' },
        { value: '21', label: '21' },
        { value: '22', label: '22' },
        { value: '23', label: '23' },
        { value: '24', label: '24' },
        { value: '25', label: '25' },
    ];
    return (
        <div className='Energy'>
            <Header title='Energy Management - AC' helpContent={<HelpModal title='Energy Management - AC' text='This page is the place for you to set up the Air Conditioning, see how much energy is produced and how much is consumed. If you want to save some energy you may press the yellow "Power Saving Mode" button.' />} />
            <div className='Content'>
                <div className='PanelsRow'>
                    <div className='PanelInfo'>
                        <div className='InfoTitle'>Solar Panel I</div>
                        <div className='PanelIcon' />
                        <div className='InfoDescription'>
                            <div className='Info'>Sun Exposure:</div>
                            <div className='Green'>93%</div>
                        </div>
                    </div>
                    <div className='PanelInfo'>
                        <div className='InfoTitle'>Solar Panel II</div>
                        <div className='PanelIcon' />
                        <div className='InfoDescription'>
                            <div className='Info'>Sun Exposure:</div>
                            <div className='Yellow'>71%</div>
                        </div>
                    </div>
                    <div className='PanelInfo'>
                        <div className='InfoTitle'>Solar Panel III</div>
                        <div className='PanelIcon' />
                        <div className='InfoDescription'>
                            <div className='Info'>Sun Exposure:</div>
                            <div className='Red'>43%</div>
                        </div>
                    </div>
                </div>
                <div className='Settings'>
                    <InfoContainer>
                        <div className='InfoTitle'>Energy</div>
                        <div className='InfoDescription'>
                            <span className='EnergyIcon' /><div className='Info'>Current energy capacity is: 1KW</div>
                        </div>
                        <div className='InfoDescription'>
                            <span className='EnergyIcon' /><div className='Info'>Current energy consumption is: 200W</div>
                        </div>
                        <div className='InfoDescription'>
                            <div className='Green'>Energy is Enough!</div>
                        </div>
                    </InfoContainer>
                    <InfoContainer>
                        <div className='InfoTitle'>AC</div>
                        <div className='Controls'>
                            <div className='InfoDescription'><Select options={coldHeat} /><div className='WindIcon' /></div>
                            <div className='InfoDescription'><Select options={temperatures} /><div className='ThermometerIcon' /></div>
                        </div>
                    </InfoContainer>
                </div>
                <div className='ButtonContainer'>
                    <ConfirmButton text='Power Saving Mode' icon={ButtonIcon.Battery} color={ButtonColor.Yellow} />
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}