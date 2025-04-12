import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetailsData= useLoaderData()
    const{userId,title, id, body}=postDetailsData;
    
    return (
        <div>
            <h1>post details id:{id}</h1>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;