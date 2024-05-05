import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  function submitForm(e){
    e.preventDefault();
    if(user=="" || Password=="")
      return false;
    if(user=="user" && Password=="password")
      setIsLogin(true);
    else
      setError("Invalid username or password")

    console.log("submitted")
  }
  return (
    
    <form className="" onSubmit={(e)=>submitForm(e)}>
      <h1>Login Page</h1>
      <p>{error}</p>
      {!isLogin
      ?
      <><label>Username: </label><input onChange={(e)=>{setUser(e.target.value)}}/><br/>
      <label>Password: </label><input onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <button type="Submit">Submit</button></>
      :
      <><p>Welcome, user!</p></>}
    </form>
  );
}

export default App;
