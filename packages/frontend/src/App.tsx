import React from 'react';
import './App.css';
import {LoginPage} from "./LoginPage";
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";

const router = createBrowserRouter([
    {path: "/", element: <LoginPage/>}, // Change this to be the home page when it is ready
    {path: "/login", element: <LoginPage/>}
])

function App() {
    useNavigate()
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
