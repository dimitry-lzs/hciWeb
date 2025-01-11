import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div>
            <div className='Header'>
                <Link to='/'>Main</Link>
                <Link to='/cloths-setup'>Cloths</Link>
                <Link to='/tent-position'>Tent</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
