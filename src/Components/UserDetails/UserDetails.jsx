import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData()
    const {name, id, email, website}=user;
    return (
        <div>
            <h1>Name:{name}</h1>
            <p>website:{website}</p>
        </div>
    );
};

export default UserDetails;