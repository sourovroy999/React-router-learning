import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const postDetailsData= useLoaderData();

    const {postId}=useParams();

    const navigate=useNavigate();

    const{userId,title, id, body}=postDetailsData;

    console.log(postId);
    

    const handleGoBack=()=>{
        navigate(-1)
    }
    
    return (
        <div>
            <h1>post details id:{id}</h1>
            <h2>Title: {title}</h2>

            <p><small>{body}</small></p>

            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;