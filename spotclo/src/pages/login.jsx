import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
font-family: Arial, sans-serif;
background-color: rgb(17, 98, 112);
margin-top: -150px;
background-size: cover;
height: 1130px;
display: flex;


.container1 {
    height: 530px;
    width: 450px;
   margin-left: 700px;
   margin-top: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;

    
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input[type="email"],
  .form-group input[type="password"] {
    width: 85%;
    height: 30px;
    padding: 30px;
    border: 1px solid #ccc;
  }
  
  .form-group input[type="radio"] {
    margin-right: 5px;
  }
  
  .form-group input[type="submit"] {
    padding: 10px 20px;
    background-color: rgb(17, 98, 112);
    color: #fff;
    border: none;
    cursor: pointer;
    height: 50px;
    width: 100%;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-center a {
    text-decoration: none;
    font-size: 15px;
    color: #000000;
    word-spacing: 1px;
  }
  span{
      color:  rgb(17, 98, 112);
  }
  .container1 h2 {
font-weight: normal;

}

.form-group label {
font-weight: normal; 
}

.text-center a {
font-weight: normal; 
}

  @media screen and (max-width: 768px) {
 
  .container1 {
    width: 430px;
    margin-left: 20px;
    margin-top: 150px;
    padding: 10px;
  }
  .form-group input[type="email"],
  .form-group input[type="password"] {
    width: 80%;
    height: 30px;
  }
  .form-group input[type="submit"] {
    height: 40px;
  }
  .text-center a {
    font-size: 13px;
  }
}
`;

export default function Login() {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    console.log(value);
  },[value])
  return (
    <Container>
    <div class="container1">
      <h2 class="text-center">Login</h2>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter email" onChange={(e)=>console.log(e.target.value)} required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter password" onChange={(e)=>console.log(e.target.value)} required />
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" name="show_password" value="true" /> Show Password
          </label>
        </div>
        <div class="form-group">
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <p class="text-center">
        <a href="#">Forgot <span>Username / Password</span>? </a> <br /><a href="#">Don't have an account?<span> Sign up</span> </a>
      </p>
    </div>
    </Container>
  )
}

// export default Login
