import React, { useState } from 'react'

const Form = (props) => {
    //STATE variables
    const[FirstName, setFirstName] = useState("");
    const[LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState(""); 
    const [ConfirmPassword, setConfirmPassword] = useState(""); 
    
    //VALIDATIONS
    const [FirstNameError, setFirstNameError] = useState("")
    const [LastNameError, setLastNameError] = useState("")
    const [EmailError, setEmailError] = useState("")
    const [PasswordError, setPasswordError] = useState("")
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
    const [HasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    //CREATE USER
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            FirstName, 
            LastName, 
            Email, 
            Password, 
            ConfirmPassword 
        };
        
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);

        // FUNCTION FROM PROPS -> app.js
        props.addUser(newUser);

        // RESET STATE
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    };


    /*//Confirm Form Submission
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        }  
        else {
            return "Welcome, please submit the form";
        }
    };*/


    //Handle First Name
    const handleFirstName = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value);
        if (e.target.value == "") {
            setFirstNameError("");
        }
        else if (e.target.value.length <2) {
            setFirstNameError("First Name is required and must be at least 2 characters.");
        }
        else {
            setFirstNameError("");
        }
    }


    //Handle Last Name
    const handleLastName = (e) => {
        console.log(e.target.value);
        setLastName(e.target.value);
        if (e.target.value == "") {
            setLastNameError("");
        }
        else if(e.target.value.length < 2){
            setLastNameError("Last Name is required and must be at least 2 characters.");
        }
        else {
            setLastNameError("");
        }
    }


    //Handle Email
    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
        if (e.target.value == "") {
            setEmailError("");
        }
        else if (e.target.value.length < 2) {
            setEmailError("Email is required and must be at least 2 characters.");
        }
        else {
            setEmailError("");
        }
    }

    //Handle Password
    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        if (e.target.value == "") {
            setPasswordError("");
        }
        else if(e.target.value.length < 1){
            setPasswordError("Password must be at least 8 characters.");
        }
        else {
            setPasswordError("");
        }
    }


    //Handle Confirm Password
    const handleConfirmPassword = (e) => {
        console.log(e.target.value);
        setConfirmPassword(e.target.value);
        if (e.target.value == "") {
            setConfirmPasswordError("");
        }
        else if(e.target.value != Password) {
            setConfirmPasswordError("Passwords must match");
        }
        else {
            setConfirmPasswordError("");
        }
    }

    
    return (

        <form onSubmit={ createUser }>
            {
                HasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } value={ FirstName } />
                {
                    FirstNameError ?
                    <p style = {{ color: "red" }}>{ FirstNameError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } value={ LastName } />
                {
                    LastNameError ?
                    <p style = {{ color: "red" }}>{ LastNameError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } value={ Email } />
                {
                    EmailError ?
                    <p style = {{ color: "red" }}>{ EmailError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } value={ Password } />
                {
                    PasswordError ?
                    <p style = {{ color: "red" }}>{ PasswordError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword } value={ ConfirmPassword } />
                {
                    ConfirmPasswordError ?
                    <p style = {{ color: "red" }}>{ ConfirmPasswordError }</p> :
                    ""
                }
            </div>
            <input type="submit" value="Create User" />

            
            <h3>Your Form Info</h3>
            <p>First Name: { FirstName }</p>
            <p>Last Name: { LastName }</p>
            <p>Email: { Email }</p>
            <p>Password: { Password }</p>
            <p>Confirm Password: { ConfirmPassword }</p>

        </form>


    );
}

export default Form
