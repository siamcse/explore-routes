import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {id,name,username,email} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Username: <Link to={`/friend/${id}`}>{username}</Link></p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;