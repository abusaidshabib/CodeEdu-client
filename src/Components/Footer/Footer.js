import React from 'react';
<<<<<<< HEAD
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
=======

const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">

                <div className="text-center p-3" style={{backgroundColor: "light-blue"}}>
                    © 2022 Copyright:
                    <p className="text-dark text-decoration-none"> CodeEdu </p>
>>>>>>> 89e46c5d218e579aa1ec3cceb49b643e379a4002
                </div>
            </footer>
        </div>
    );
};

export default Footer; 