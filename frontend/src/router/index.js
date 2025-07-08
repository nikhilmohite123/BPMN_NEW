
import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import RootLayout from '../layouts/rootlayout/RootLayout';
import { Home, Login, SpeakUp } from '../pages';

function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/speakup' element={<SpeakUp/>}/>
                </Route>
            </>
        )
    );

    return <RouterProvider router={router} />;
}

export default Router;
