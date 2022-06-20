import React from 'react';

function User(props) {
    return(										
    <tr>
        <td>{props.id}</td>
        <td>{props.username}</td>
        <td>{props.name}</td>
        <td>{props.surname}</td>
        <td>{props.email}</td>
    </tr>
    )
}

export default User;