import React from 'react';
import './Header.less';

export default function Header({ title }: { title: string }) {
    return (
        <div className='Header'>
            <div className='PageTitle'>
                <div className='Logo' />
                <div className='Title'>{title}</div>
            </div>
        </div>
    );
}
