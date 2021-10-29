import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { handleGoogleSignin } = useFirebase();
    return (
        <div className="container mx-auto google-signin">
            <h4 className="text-center">Signin</h4>
            <div className="d-flex justify-content-center align-items-center my-5">
                <button onClick={handleGoogleSignin} type="button" class="btn btn-outline-success rounded-pill google-btn"><i class="fab fa-google"></i> Continue with google</button>
            </div>
        </div>
    );
};

export default Login;