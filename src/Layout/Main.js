import React from 'react';
import { Outlet } from 'react-router-dom';
import NavManu from '../Shared/NavMenu/NavManu';

const Main = () => {
    return (
        <div>
            <NavManu></NavManu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;