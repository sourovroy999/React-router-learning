import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts=useLoaderData();

    return (
        <div>
            <h1>Posts : {posts.length}</h1>
            <div className='postsContainer'>
                {
                    posts.map(pPost=><Post key={pPost.id} allpost={pPost}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;