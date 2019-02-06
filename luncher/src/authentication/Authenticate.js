import React from 'react';
import { Redirect } from 'react-router-dom';
const Authenticate = AdminHome => {
    let user = localStorage.getItem('jwt');
    if(user !== null) {
        return null;
    }
    let arr = window.location.href.split('/');
    if(arr[arr.length - 1] !== 'login') {
        return <Redirect to="/login" />
    }
    return null;
    
}

export default Authenticate;