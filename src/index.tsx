import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter,
    redirect
} from 'react-router-dom';

import App from './app/App';
import MainScreen from './pages/Main';
import TentPosition from './pages/TentPosition';
import ClothsSetup from './pages/ClothsSetup';
import ErrorScreen from './pages/Error';
import LightsMenu from './pages/LightsMenu';
import CustomLighting from './pages/CustomLighting';
import Weather from './pages/Weather';
import Activities from './pages/Activities';
import PolesSetup from './pages/PolesSetup';
import SpecialOccasions from './pages/SpecialOccasions';
import Energy from './pages/Energy';
import Efood from './pages/Efood';
import Map from './pages/Map';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <App />
        ),
        children: [
            {
                index: true,
                element: <React.Fragment />,
                loader: () => redirect('/main')
            },
            {
                path: '/main',
                index: true,
                element: <MainScreen />
            },
            {
                path: '/tent-position',
                element: <TentPosition />
            },
            {
                path: '/poles-setup',
                element: <PolesSetup />
            },
            {
                path: '/cloths-setup',
                element: <ClothsSetup />
            },
            {
                path: '/lighting',
                element: <LightsMenu />
            },
            {
                path: '/custom-lighting',
                element: <CustomLighting />
            },
            {
                path: '/weather',
                element: <Weather />
            },
            {
                path: '/activities',
                element: <Activities />
            },
            {
                path: '/special-occasions',
                element: <SpecialOccasions />
            },
            {
                path: '/energy',
                element: <Energy />
            },
            {
                path: '/efood',
                element: <Efood />
            },
            {
                path: '/map',
                element: <Map />
            }
        ],
        errorElement: <ErrorScreen />
    }
], {
    basename: window.location.hostname.includes('github.io')
        ? '/hciWeb'
        : '/'
});

function boot() {
    const htmlElement = document.getElementById('root')!;
    const root = createRoot(htmlElement);
    root.render(
        <RouterProvider router={router} />);
}

boot();
