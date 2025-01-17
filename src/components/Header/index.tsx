import React from 'react';
import './Header.less';
import { Link } from 'react-router-dom';

export default function Header({ title }: { title: string }) {
    return (
        <div className='Header'>
            <div className='PageTitle'>
                <Link to='/main'><div className='Logo' /></Link>
                <div className='Title'>{title}</div>
            </div>
        </div>
    );
}
