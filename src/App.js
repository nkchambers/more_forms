import './App.css';
import Form from './components/Form';
import UserDisplay from './components/UserDisplay';
import React, {useState} from 'react';

function App() {

  const [users, setUsers] = useState([])

  const addUser = (newUser) => {
    // console.log(newUser);
    setUsers([
      ...users, newUser
    ])
    // console.log("addUser function from app.js");
  }


  return (
    <div className="App">
        <h1>Forms</h1>
        
        <hr />

        <Form addUser={addUser}/>
        
        <hr />

        <UserDisplay users={users}/>
    </div>
  );
}

export default App;