import React from 'react';


function UserDetails({email,age,address,mobileNo}){
    return(
        <div>
            <p><b>Email : </b>{email}</p>
            <p><b>Age : </b>{age}</p>
            <p><b>Address : </b>{address}</p>
            <p><b>Modile No : </b>{mobileNo}</p>
            
        </div>
    );
}
export default UserDetails;