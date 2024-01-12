import React from 'react';
import './App.css';
import {LoginPage} from "./LoginPage";
import {HomePage} from "./HomePage";
import {ProfilePage} from "./ProfilePage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/profile", element: <ProfilePage/>}
])

const App: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
