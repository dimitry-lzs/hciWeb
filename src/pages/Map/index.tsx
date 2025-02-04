import React from 'react';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import InfoContainer from '../../components/InfoContainer';

import './Map.less';
import Pin, { PinColor } from '../../components/Pin';

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

export default function Map() {
    const [selectedLocation, setSelectedLocation] = React.useState<Location | null>(null);

    return (
        <div className='CampsiteMap'>
            <Header title='Map' helpContent={
                <HelpModal title='Map Help'>
                    <h3>You are on your own! (for now)</h3>
                </HelpModal>
            } />            <div className='Content'>
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
                        {locations.map(pin => (
                            <div className={`pin ${pin.id === selectedLocation?.id ? 'selected' : ''}`} key={pin.id} style={{ top: pin.location.top, left: pin.location.left }}>
                                <Pin color={pin.color} onClick={() => setSelectedLocation(pin)} />
                            </div>
                        ))}
                    </div>
                    {selectedLocation
                        ? <InfoContainer>
                            <div className='LocationDescription'>
                                {selectedLocation?.description}
                            </div>
                        </InfoContainer>
                        : null}
                </div>
                <InfoContainer>
                    <div className='ContainerItem'>
                        <div className='ItemText'>Fr. 15 Aug, 14:34</div>
                    </div>
                    <div className='ContainerItem'>
                        <div className='ItemIcon sun' />
                        <div className='ItemText'>Tent</div>
                    </div>
                    <div className='ContainerItem'>
                        <div className='ItemIcon drops' />
                        <div className='ItemText'>Tent</div>
                    </div>
                    <div className='ContainerItem'>
                        <div className='ItemIcon thermometer' />
                        <div className='ItemText'>32C</div>
                    </div>
                </InfoContainer>
            </div>
        </div>
    );
}
