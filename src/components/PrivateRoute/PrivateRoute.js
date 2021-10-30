import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useAuth();
    if (isLoding) {
        return <div className=" w-25 mx-auto">
            <Spinner animation="border" variant="success" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        ></Route>
    );
};

export default PrivateRoute;