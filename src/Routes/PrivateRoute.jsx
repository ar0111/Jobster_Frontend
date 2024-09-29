import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <Loading></Loading>

    if(user){
        console.log(user);
        
        return children;
    }

    return <Navigate to='/landing' state={{from:location}}></Navigate>
};

export default PrivateRoute;