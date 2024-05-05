import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [Password, setPassword] = useState("");
  function submitForm(e){
    e.preventDefault();
    if(user=="" || Password=="")
      return false;
    console.log("submitted")
  }
  return (
    <form className="" onSubmit={(e)=>submitForm(e)}>
      <h1>Login Page</h1>
      Username: <input onChange={(e)=>{setUser(e.target.value)}}/><br/>
      Password: <input onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <button type="Submit">Submit</button>

    </form>
  );
}

export default App;
