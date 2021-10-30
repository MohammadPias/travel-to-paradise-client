import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Login.css'

const Login = () => {
    const { handleGoogleSignin } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        handleGoogleSignin()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="container mx-auto google-signin">
            <h4 className="text-center">Signin</h4>
            <div className="d-flex justify-content-center align-items-center my-5">
                <button onClick={handleGoogleLogin} type="button" class="btn btn-outline-success rounded-pill google-btn"><i class="fab fa-google"></i> Continue with google</button>
            </div>
        </div>
    );
};

export default Login;