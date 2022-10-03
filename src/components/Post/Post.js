import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleDetails}>Show Details2</button>
        </div>
    );
};

export default Post;