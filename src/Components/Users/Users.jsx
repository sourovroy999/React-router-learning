import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';
import './Users.css'

const Users = () => {

    const users=useLoaderData()
    // const users=useLoaderData()


    //state--> data
    //state-->loader
    //use effect
    //fetch--> state set ---> set state
    return (
        <div>
           <h1> Our users: {users.length}</h1>
           <p>our fantastic users</p>
           <div className='usersContainer'>
            {
                users.map(pUser=><User key={users.id} user={pUser}></User>)
            }
           </div>
        </div>
    );
};

export default Users;