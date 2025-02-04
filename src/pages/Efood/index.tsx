import React, { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import InfoContainer from '../../components/InfoContainer';
import Select from '../../components/Select';
import ConfirmButton, { ButtonColor, ButtonIcon } from '../../components/ConfirmButton';
import BackButton from '../../components/BackButton';

import './Efood.less';
import useChat from '../../hooks/useChat';

enum Restaurants {
    GLA = 'gla',
    LPH = 'lph'
}

const restaurants = [
    {
        value: Restaurants.GLA,
        label: 'George L.A. Fired Chicken'
    },
    {
        value: Restaurants.LPH,
        label: 'Los Pollos Hermanos'
    }
];

const foodMenu = {
    [Restaurants.GLA]: [
        {
            value: 'classicBurger',
            name: 'Classic Burger',
            price: 4.90
        },
        {
            value: 'classicFamilyCombo',
            name: 'Classic Family Combo',
            price: 10.99
        },
        {
            value: 'familyFeast',
            name: 'Family Feast',
            price: 15.99
        },
        {
            value: 'onionRings',
            name: 'Onion Rings',
            price: 3.00
        }
    ],
    [Restaurants.LPH]: [
        {
            value: 'baldMikesBurger',
            name: 'Bald Mike\'s Burger',
            price: 5.99
        },
        {
            value: 'uncleGustavoSpecial',
            name: 'Uncle Gustavo\' Special',
            price: 10.99
        },
        {
            value: 'lalosFavoriteCombo',
            name: 'Lalo\'s Favorite Combo',
            price: 3.99
        },
        {
            value: 'sodaWithCrystalBlueIce',
            name: 'Soda with Crystal Blue Ice',
            price: 30.00
        }
    ]
};

function Order({ order }: { order: { restaurant: { value: string, label: string }, food: string; total: number; paymentMethod: { label: string, value: string }; status: 'delivered' | 'pending' } }) {
    return (
        <div className='OrderItem'>
            <div className='OrderNumber'>Order #123</div>
            <div className='OrderDetailsRow'>Restaurant: <span className='Value'>{order.restaurant.label}<span className={`RetaurantIcon ${order.restaurant.value}`}></span></span></div>
            <div className='OrderDetailsRow'>{order.food}</div>
            <div className='OrderDetailsRow'>
                Total:
                <span className='Value'>
                    {`$${order.total}`}
                </span>
            </div>
            <div className='OrderDetailsRow'>
                Payment method:
                <span className='Value'>
                    {order.paymentMethod.label}
                    <div className={`PaymentMethodIcon ${order.paymentMethod.value}`} />
                </span>
            </div>
            <div className='OrderDetailsRow'>
                Status:
                <span className={`OrderStatus ${order.status}`}>
                    {order.status === 'delivered' ? 'Delivered' : 'Pending'}
                    {order.status !== 'delivered' && <div className='PendingIcon' />}
                </span>
            </div>
        </div>
    );
}

function Orders({ orders }: { orders: { restaurant: { value: string, label: string }, food: string; total: number; paymentMethod: { label: string, value: string }; status: 'delivered' | 'pending' }[] }) {
    return (
        <div className='OrdersList'>
            {orders.map((order, index) => (
                <Order key={index} order={order} />
            ))}
        </div>
    );
}

function Typing() {
    return (
        <div className='Typing'>
            <div className='Dot' />
            <div className='Dot' />
            <div className='Dot' />
        </div>
    );
}

function Message({ text, incoming }: { text: string; incoming?: boolean }) {
    const [read, setRead] = React.useState(false);

    useEffect(() => {
        if (!incoming) {
            setTimeout(() => {
                setRead(true);
            }, 2000);
        }
    }, []);

    return (
        <div className={`Message ${incoming ? 'Incoming' : 'Outgoing'}`}>
            {text}
            <span className={`Read ${read ? 'show' : ''}`}>Read</span>
        </div>
    );
}

const paymentOptions = [{ value: 'cash', label: 'Cash' }, { value: 'creditCard', label: 'Credit card' }, { value: 'later', label: 'Tha sta dwsw meta bro' }];

export default function Efood() {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = React.useState<Restaurants | null>(null);

    const [orders, setOrders] = React.useState<{ restaurant: { value: string, label: string }, food: string; total: number; paymentMethod: { label: string, value: string }; status: 'delivered' | 'pending' }[]>([]);

    const [food, setFood] = React.useState<string | null>(null);
    const [paymentMethod, setPaymentMethod] = React.useState<string | null>(null);

    const [messages, setMessages] = React.useState<{ text: string; incoming?: boolean }[]>([]);
    const [messageText, setMessageText] = React.useState('');

    const { response, loading, sendMessage } = useChat();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages.length]);

    useEffect(() => {
        if (orders.length) {
            setMessages(oldMessages => [...oldMessages, {
                text: 'Your order has been placed successfully!',
                incoming: true
            }]);
            setTimeout(() => {
                setOrders(oldOrders => oldOrders.map(order => ({ ...order, status: 'delivered' })));
            }, 5e3);
        }
    }, [orders.length]);

    const menu = useMemo(() => (restaurant && foodMenu[restaurant]) || [], [restaurant]);

    useEffect(() => {
        if (response) {
            setMessages(oldMessages => [...oldMessages, {
                text: response,
                incoming: true
            }]);
        }
    }, [response]);

    return (
        <div className='Efood'>
            <Header title='Order Food' helpContent={<HelpModal title='Ordering your food' text='Here you can choose one something for you from one of the restaurants we have here and place your order, contact restaurant, and see your order progress.' />} />
            <div className='Content'>
                <InfoContainer>
                    <div className='OrderTitle'>Your order</div>
                    <Select placeHolder='Select restaurant' label='Restaurant' options={restaurants} onSelect={option => setRestaurant(option as Restaurants)} value={restaurant} />
                    {restaurant && (<><Select placeHolder='Select meal bundle' label='Food' options={menu.map(item => ({ value: item.value, label: `${item.name} - $${item.price}` }))} onSelect={option => setFood(option)} value={food} /><Select placeHolder='Select payment method' label='Payment method' options={paymentOptions} onSelect={method => setPaymentMethod(method)} value={paymentMethod} /></>)}
                    {(restaurant && food && paymentMethod)
                        ? <ConfirmButton text='Place Order' color={ButtonColor.Green} icon={ButtonIcon.Tick} onClick={() => {
                            setOrders(oldOrders =>
                                [...oldOrders, {
                                    restaurant: restaurants.find(item => item.value === restaurant) || { label: '', value: '' },
                                    food: menu.find(item => item.value === food)?.name || '',
                                    total: menu.find(item => item.value === food)?.price || 0,
                                    paymentMethod: paymentOptions.find(option => option.value === paymentMethod) || { label: '', value: '' },
                                    status: 'pending' as 'delivered' | 'pending'
                                }]);
                            setFood(null);
                            setPaymentMethod(null);
                            setRestaurant(null);
                        }} />
                        : null}
                </InfoContainer>
                <div className='ChatBox'>
                    <div className='ChatBoxTitle'>
                        Chat
                        <div className='ChatIcon' />
                    </div>
                    <div className='MessagesBox'>
                        {messages.map((message, index) => (
                            <Message key={index} {...message} />
                        ))}
                        {loading && <Typing />}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className='InputBox'>
                        <input placeholder='Type a message...' value={messageText} onChange={event => setMessageText(event.target.value)} onKeyDown={event => {
                            if (event.key === 'Enter' && messageText.trim()) {
                                setMessages(oldMessages => [...oldMessages, { text: messageText, incoming: false }]);
                                const ordersInfo = orders.map(order => `Restaurant: ${order.restaurant.label}, Item ordered: ${order.food}, Payment method: ${order.paymentMethod.label}`).join(' ');
                                sendMessage(ordersInfo + ' ' + messageText);
                                setMessageText('');
                            }
                        }} />
                        <div className='SendButton' onClick={() => {
                            if (messageText?.trim()) {
                                setMessages(oldMessages => [...oldMessages, { text: messageText?.trim(), incoming: false }]);
                                const ordersInfo = orders.map(order => `Restaurant: ${order.restaurant.label}, Item ordered: ${order.food}, Payment method: ${order.paymentMethod.label}`).join(' ');
                                sendMessage(ordersInfo + ' ' + messageText);
                                setMessageText('');
                            }
                        }} />
                    </div>
                </div>
                <InfoContainer>
                    <div className='OrderTitle'>Orders</div>
                    <Orders orders={orders} />
                </InfoContainer>
            </div>
            <div className='NavigationButton'>
                <BackButton navigate={() => navigate(-1)} />
            </div>
        </div>
    );
}
