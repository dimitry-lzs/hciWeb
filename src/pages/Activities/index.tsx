import React from 'react';
import './Activities.less';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import { useNavigate } from 'react-router-dom';

export default function Activities() {
    const navigate = useNavigate();
    return (
        <div className='Activities'>
            <Header title='Activities' helpContent={<HelpModal title='Activities' text="Here you can be informed about the upcoming activities of the camping! Do not forget to press the 'Participate' button, in order to get admission for the events!" />} />
            <div className='Content'>
                <div className='Info'>
                    <div className='Notification'>You have 2 upcoming activities! <span className='BellIcon'></span></div>
                </div>
                <div className='Box'>
                    <InfoContainer>
                        <div className='Row'>
                            <span className='CalendarIcon'></span>
                            <InfoRow label='Friday 24 January 2025' value='Beach Volley League, meeting at the Beach at 5 p.m. Admissions until 23rd of January.' />
                        </div>
                        <div className='Button'>
                            <ConfirmButton text='Participate' icon={ButtonIcon.Participate} color={ButtonColor.Green} />
                        </div>
                    </InfoContainer>
                </div>
                <div className='Box'>
                    <InfoContainer>
                        <div className='Row'>
                            <span className='CalendarIcon'></span>
                            <InfoRow label='Sunday 26 January 2025' value='Jazz Music Concert, at the central stage at 9 p.m. Admissions until 25rd of January.' />
                        </div>
                        <div className='Button'>
                            <ConfirmButton text='Submitted' icon={ButtonIcon.Tick} color={ButtonColor.Yellow} />
                        </div>
                    </InfoContainer>
                </div>
                <div className='NavigationButton'>
                    <BackButton navigate={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}