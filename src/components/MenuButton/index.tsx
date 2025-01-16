import React from 'react';
import { Link } from 'react-router-dom';

import './MenuButton.less';

export enum MenuButtonIcon {
    TentSetup = 'tentSetup',
    Cloths = 'cloths',
    Lighting = 'lighting',
    Energy = 'energy',
    Weather = 'weather',
    Activities = 'activities',
    Lightbulb = 'lightbulb',
    SpecialOccasions = 'specialOccasions'
}

export default function MenuButton({ title, icon, link }: {
    title: string;
    icon: MenuButtonIcon;
    link: string;
}) {
    return (
        <Link to={link} className='MenuButton'>
            <div className='ButtonTitle'>{title}</div>
            <div className={`ButtonIcon ${icon}`} />
        </Link>);

}
