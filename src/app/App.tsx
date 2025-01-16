import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.less';

function App() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default App;
