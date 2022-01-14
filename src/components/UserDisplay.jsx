import React from 'react'

const UserDisplay = (props) => {

    console.log(props);
    //const {users} = props;
    return (
        <fieldset>

            <legend>DisplayUsers.jsx</legend>

            <hr />

            {
                props.users.map( (u, i) => {
                    return <div>
                                <p key={i}><label>First Name:  {u.FirstName}</label></p>
                                <p key={i}><label>Last Name:  {u.LastName}</label></p>
                                <p key={i}><label>Email:  {u.Email}</label></p>
                                <p key={i}><label>Password:  {u.Password}</label></p>
                                <p key={i}><label>Confirm Password: {u.ConfirmPassword}</label></p>
                                
                                <hr />
                            </div>
                })
            }

        </fieldset>
    )
}

export default UserDisplay