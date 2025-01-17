import React, { useState } from 'react';
import './Header.less';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default function Header({ title, helpContent }: { title: string, helpContent?: React.ReactNode }) {
    const [helpOpen, setHelpOpen] = useState(false);
    return (
        <div className='Header'>
            {helpContent && <Modal styles={{ modal: { borderRadius: '20px' } }} open={helpOpen} onClose={() => setHelpOpen(false)} center>{helpContent}</Modal>}
            <div className='PageTitle'>
                <Link to='/main'><div className='Logo' /></Link>
                <div className='Title'>{title}</div>
                {helpContent && <div className='HelpButton' onClick={() => setHelpOpen(true)} />}
            </div>
        </div>
    );
}
