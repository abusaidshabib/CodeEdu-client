import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Footer = () => {
    const {mode} = useContext(AuthContext);
    return (
        <div>
            <footer className={`bg-${mode} ${mode} text-center text-lg-start`}>

                <div className="text-center p-3" style={{backgroundColor: "light-blue"}}>
                    © 2022 Copyright:
                    <p className="text-decoration-none"> CodeEdu </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer; 