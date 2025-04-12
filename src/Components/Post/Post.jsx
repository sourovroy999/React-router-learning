import React from 'react';
import { Link } from 'react-router';

const Post = ({allpost}) => {
    const {id,title}=allpost

    const postStyle={
        border:'2px solid blue',
        padding:'10px',
        borderRadius:'20px',
        marginBottom:'10px'
    }

    return (
        <div style={postStyle}>
            <h3>post id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Details</button></Link>
        </div>
    );
};

export default Post;