import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import InfoContainer from '../../components/InfoContainer';
import Pin, { PinColor } from '../../components/Pin';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import BackButton from '../../components/BackButton';

import './Map.less';

interface Location {
    id: string;
    name: string;
    description: string;
    color: PinColor;
    location: {
        top: string;
        left: string;
    };
}

const locations: Location[] = [
    {
        id: 'concertScene',
        name: 'Concert Scene',
        description: 'This is a very interesting place to have certain amount of fun.',
        color: PinColor.DarkBlue,
        location: {
            top: '148px',
            left: '247px'
        }
    },
    {
        id: 'puddle',
        name: 'A Puddle',
        description: 'A generic puddle. You can go for fishy trips there.',
        color: PinColor.Blue,
        location: {
            top: '2px',
            left: '220px'
        }
    },
    {
        id: 'puddle_2',
        name: 'A Bigger Puddle',
        description: 'A somewhat bigger puddle. Has some floating objects on the surface. Bigger fish.',
        color: PinColor.Green,
        location: {
            top: '289px',
            left: '391px'
        }
    },
    {
        id: 'suspiciousUfo',
        name: 'Suspicious UFO',
        description: 'A weird colorful object that is not supposed to be here. Geiger counter is off charts here.',
        color: PinColor.Purple,
        location: {
            top: '32px',
            left: '423px'
        }
    },
    {
        id: 'yourLocation',
        name: 'You are here',
        description: 'You are here. You can see the map and the locations.',
        color: PinColor.Red,
        location: {
            top: '59px',
            left: '673px'
        }
    },
    {
        id: 'umbrellas',
        name: 'Some Umbrellas',
        description: 'A place with some umbrellas. You can get some shade here or hide from unexpected radioactive nuclear fallout.',
        color: PinColor.Yellow,
        location: {
            top: '244px',
            left: '246px'
        }
    },
    {
        id: 'pier',
        name: 'Pier',
        description: 'A place where you can go fishing or just sit and enjoy the view, or takeover someone\'s boat and imagine yourself to be the coolest pirate of this godforsaken puddle.',
        color: PinColor.Orange,
        location: {
            top: '249px',
            left: '124px'
        }
    }
];

function Clock() {
    const [date, setDate] = React.useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(dayjs());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return date.format('ddd MMM HH:mm:ss');
}

const Line = ({ from, to }: { from: { top: string, left: string }, to: { top: string, left: string } }) => {
    const x1 = parseInt(from.left, 10);
    const y1 = parseInt(from.top, 10);
    const x2 = parseInt(to.left, 10);
    const y2 = parseInt(to.top, 10);

    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    return (
        <div
            style={{
                position: 'absolute',
                top: `${y1}px`,
                left: `${x1}px`,
                width: `${length}px`,
                height: '2px', // Thickness of the line
                backgroundColor: 'yellow', // Bright color
                transformOrigin: 'top left',
                transform: `rotate(${angle}deg)`
            }}
        />
    );
};

export default function Map() {
    const navigate = useNavigate();
    const userLocation = locations.find(loc => loc.id === 'yourLocation');
    const [navigation, setNavigation] = React.useState(false);

    const getCoordinates = (location: Location) => ({
        x: parseInt(location.location.left) + 11,
        y: parseInt(location.location.top) + 11
    });
    const [selectedLocation, setSelectedLocation] = React.useState<Location | null>(null);

    return (
        <div className='CampsiteMap'>
            <Header title='Map' helpContent={
                <HelpModal title='Map Help'>
                    <p><strong>Interacting with the Map Help</strong>  </p>
                    <ul>
                        <li><strong>Explore</strong> campsite locations and details.  </li>
                        <li><strong>Interact</strong> with the map to see your location &amp; place info.  </li>
                        <li><strong>Check</strong> time, date, and weather updates.  </li>
                    </ul>
                    <p><strong>Using GPS Navigation:</strong>  </p>
                    <ol>
                        <li>Click a <strong>pin</strong> to select a destination.  </li>
                        <li>Press <strong>Navigate</strong> to start guidance.  </li>
                        <li>Follow the <strong>red line</strong> on the map to reach your destination.  </li>
                    </ol>
                </HelpModal>
            } />
            <div className='Content'>
                <InfoContainer>
                    {locations.map(location => (
                        <div className='ContainerItem' key={location.id}>
                            <Pin color={location.color} />
                            <div className='LocationText'>{location.name}</div>
                        </div>
                    ))}
                </InfoContainer>
                <div className='Center'>
                    <div className='CampMap'>
                        <svg
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none'
                            }}
                        >
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {selectedLocation && userLocation && navigation && (
                                <line
                                    x1={getCoordinates(userLocation).x}
                                    y1={getCoordinates(userLocation).y}
                                    x2={getCoordinates(selectedLocation).x}
                                    y2={getCoordinates(selectedLocation).y}
                                    stroke="#63D0C4"
                                    strokeWidth="4"
                                    filter="url(#glow)"
                                />
                            )}
                        </svg>
                        {locations.map(pin => (
                            <div className={`pin ${pin.id === selectedLocation?.id ? 'selected' : ''}`} key={pin.id} style={{ top: pin.location.top, left: pin.location.left }}>
                                <Pin color={pin.color} onClick={() => {
                                    setNavigation(false);
                                    setSelectedLocation(pin);
                                }
                                } />
                            </div>
                        ))}
                    </div>
                    {selectedLocation
                        ? <><InfoContainer>
                            <div className='LocationDescription'>
                                {selectedLocation?.description}
                            </div>
                        </InfoContainer>
                            <ConfirmButton onClick={() => setNavigation(true)} text='Navigate' color={ButtonColor.Green} icon={ButtonIcon.Navigate} />
                        </>
                        : null}
                </div>
                <InfoContainer>
                    <div className='ContainerItem vertical'>
                        <div className='ItemText'>{Clock()}</div>
                    </div>
                    <div className='ContainerItem vertical'>
                        <div className='ItemIcon sun' />
                        <div className='ItemText'>Sunny</div>
                    </div>
                    <div className='ContainerItem vertical'>
                        <div className='ItemIcon drops' />
                        <div className='ItemText'>49%</div>
                    </div>
                    <div className='ContainerItem vertical'>
                        <div className='ItemIcon thermometer' />
                        <div className='ItemText'>32°C</div>
                    </div>
                </InfoContainer>
            </div>
            <div className='NavigationButton'>
                <BackButton navigate={() => navigate(-1)} />
            </div>
        </div>
    );
}
