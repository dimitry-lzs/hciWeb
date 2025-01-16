import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';

import App from './app/App';
import MainScreen from './pages/Main';
import TentPosition from './pages/TentPosition';
import ClothsSetup from './pages/ClothsSetup';
import ErrorScreen from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <App />
        ),
        children: [
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
                path: '/cloths-setup',
                element: <ClothsSetup />
            }
        ],
        errorElement: <ErrorScreen />
    }
]);

function boot() {
    const htmlElement = document.getElementById('root')!;
    const root = createRoot(htmlElement);
    root.render(
        <RouterProvider router={router} />);
}

boot();
