import React , { Component } from 'react';
import { FormGroup  } from 'react-bootstrap';
import './App.css';
//import { Button, Form, FormGroup, Label, input } from 'react-bootstrap' ;
//import { FacebookLoginButton } from "react-social-login-buttons";
function App() {
  return (
    <form className="App">
      <h1> 
        <span className="font-weight-bold">mywebsite</span>.com
        </h1> 
        <h2>Welcome</h2>
        <formGroup className ='center'>
          <label>Email</label>
          <input type="email"placeholder="Email"/> <br></br>
        </formGroup> 
        <formGroup className ='center'> <br></br>
          <label >Password</label>
          <input type="Password"placeholder="Password"/>
        </formGroup> <br></br>
          <button className='button'>login</button> <br></br>
          <div className="text-center pt-3">
            or cotinue with your social account 
            </div> 
            <facebookbuttonlogin/> 
    </form>
  );
}

export default App;
