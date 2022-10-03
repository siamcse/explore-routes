import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/friend/${postDetails.id}`);
    }
    return (
        <div>
            <h2>Post Details: {postDetails.id}</h2>
            <h3>Title: {postDetails.title}</h3>
            <p>Body: {postDetails.body}</p>
            <button onClick={handleNavigate}>Show Author</button>
        </div>
    );
};

export default PostDetails;