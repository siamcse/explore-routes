import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    const {name, phone} = friendDetails;
    return (
        <div>
            <h3>We need to know about our friend.</h3>
            <h5>Name: {name}</h5>
            <p>Call to her/him: {phone}</p>
        </div>
    );
};

export default FriendDetails;