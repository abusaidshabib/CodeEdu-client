import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const LoginBtns = () => {

    const {providerLogin, gitProviderLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            navigate(from,{replace: true});
        })
        .catch(error => console.error(error));
    }

    const handleGithubSignIn = () =>{
        gitProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            navigate(from,{replace: true});
        })
        .catch(error => console.error(error));
    }

    return (
        <Col lg="4" className='mt-5'>
            <Button onClick={handleGoogleSignIn}>Sign In With Google</Button><br></br><br />
            <Button onClick={handleGithubSignIn}>Sign In With Github</Button>
        </Col>
    );
};

export default LoginBtns;