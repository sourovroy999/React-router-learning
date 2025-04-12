import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({allpost}) => {
    const {id,title}=allpost

    const navigate=useNavigate();

    const postStyle={
        border:'2px solid blue',
        padding:'10px',
        borderRadius:'20px',
        marginBottom:'10px'
    }

    const handleShowDetails=()=>{
     navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h3>post id: {id}</h3>
            
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Details</button></Link>

            <button onClick={handleShowDetails}>Click to show details</button>
        </div>
    );
};

export default Post;