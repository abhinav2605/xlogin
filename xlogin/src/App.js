import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  function submitForm(e){
    e.preventDefault();
    if(user=="" || Password=="")
      return false;
    console.log("submitted")
  }
  return (
    
    <form className="" onSubmit={(e)=>submitForm(e)}>
      <h1>Login Page</h1>
      {!isLogin
      ?
      <><label>Username: </label><input onChange={(e)=>{setUser(e.target.value)}}/><br/>
      <label>Password: </label><input onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <button type="Submit">Submit</button></>
      :
      <></>}
    </form>
  );
}

export default App;
