import React, { useState } from 'react';
import './Activities.less';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import BackButton from '../../components/BackButton';
import InfoContainer, { InfoRow } from '../../components/InfoContainer';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import { useNavigate } from 'react-router-dom';

export default function Activities() {
    const navigate = useNavigate();
    const [participationStatus, setParticipationStatus] = useState([false, false]);

    const handleParticipate = (index: number) => {
        const newStatus = [...participationStatus];
        newStatus[index] = !newStatus[index];
        setParticipationStatus(newStatus);
    };
    return (
        <div className='Activities'>
            <Header title='Activities' helpContent={
                <HelpModal title='Activities'>
                    <ul>
                        <li>View <strong>upcoming activities</strong> with details (description, location, time, and deadline). </li>
                        <li>To <strong>participate</strong>, click the green <strong>Participate</strong> button. </li>
                        <li>If already enrolled, the button will turn <strong>yellow</strong>.</li>
                    </ul>
                </HelpModal>
            } />
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
                            {participationStatus[0] ? (
                                <ConfirmButton text='Submitted' icon={ButtonIcon.Tick} color={ButtonColor.Yellow} onClick={() => handleParticipate(0)} />
                            ) : (
                                <ConfirmButton text='Participate' icon={ButtonIcon.Participate} color={ButtonColor.Green} onClick={() => handleParticipate(0)} />
                            )}
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
                            {participationStatus[1] ? (
                                <ConfirmButton text='Submitted' icon={ButtonIcon.Tick} color={ButtonColor.Yellow} onClick={() => handleParticipate(1)} />
                            ) : (
                                <ConfirmButton text='Participate' icon={ButtonIcon.Participate} color={ButtonColor.Green} onClick={() => handleParticipate(1)} />
                            )}
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