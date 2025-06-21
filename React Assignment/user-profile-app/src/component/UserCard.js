import React from 'react';
import UserDetails from './UserDetails';

function UserCard({user}){

    return(
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
        <p><b>Name : </b>{user.name}</p>
        <UserDetails email={user.email} age={user.age} address={user.address} mobileNo={user.mobileNo} />
        </div>
    );
}

export default UserCard;