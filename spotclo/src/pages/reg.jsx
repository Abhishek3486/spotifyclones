import React from 'react'
// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import arrow from '../assets/arrow1.png';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #ff5722, #ff9800);
  height: 980px;
.register-left{
  text-align: center;
  color:#fff;
  padding: 30px;
  margin-top:100px;
}
.register-left img{
  margin-top: 60px;
  margin-bottom: 18px;
  width: 80px;
  animation: mover 1s infinite alternate;
}
.register-left p{
  padding: 20px 20px 0;
}
.register-left .btn-primary{
  border-radius: 1500px;
  border: none;
  width: 120px;
  background: #f8f8f8;
  font-weight: 600;
  color: #555;
  margin-top: 20px;
  padding: 10px;
}
.register-right {
  border: none;
  background: #f8f8f8;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  padding: 50px;
  margin-top: 100px;

 
}
.register-right h2{
  text-align: center;
  margin-bottom: 10px;
  color: #555;
}
.register-form{
  padding: 10px;
  
}
.register-right .btn-primary{
  float :right;
  border-radius: 1500px;
  border: none;
  width: 120px;
  background: #ff9800;
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
  padding: 10px;
  margin-left: 200px;
}
.form-group{
  padding: 10px;
  
}
input[type="text"] {
  width: 500px;
}
input[type="email"] {
  width: 500px;
}
input[type="password"] {
  width: 500px;
}

.register-right label{
  display: flex;
  flex-wrap: wrap;
 
}


.bounce {
  font-size: 5rem;
  width: 100%;
  margin: 3rem auto;
  display: inline-flex;
  justify-content: center;
  -webkit-box-reflect: below -20px linear-gradient(transparent, #211e1e2e);
}
.bounce span {
  display: inline-flex;
  color: #000607;
  font-family: "Play", sans-serif;
  animation: bounce 1s infinite ;
}
@keyframes bounce {
  0%,
  50%,
  100% {
      transform: translateY(0);
  }
  25% {
      transform: translateY(-20px);
  }
}
.ten span:nth-of-type(1) {
  animation-delay: 0.1s;
}
.ten span:nth-of-type(2) {
  animation-delay: 0.2s;
}
.ten span:nth-of-type(3) {
  animation-delay: 0.3s;
}
.ten span:nth-of-type(4) {
  animation-delay: 0.4s;
}
.ten span:nth-of-type(5) {
  animation-delay: 0.5s;
}
.ten span:nth-of-type(6) {
  animation-delay: 0.6s;
}
.ten span:nth-of-type(7) {
  animation-delay: 0.7s;
}
.ten span:nth-of-type(8) {
  animation-delay: 0.8s;
}
@keyframes mover{
  0%{transform: translateY(0);}
  0%{transform: translateY(-20px);}

}
@media only screen and (max-width: 768px) {
  .register-left img {
    margin-top: -80px;
    width: 60px;
  }

  .register-left p {
    padding: 10px 10px 0;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
  }
} 
`;


export const Reg = () => {
  return (
<Container>
    <div class="container">
<div class="row">
<div class="col-md-10 offset=md-1">
<div class="row">
<div class="col-md-5 register-left">
<img src={arrow} alt="" />

<h3> Join Us</h3>
<p>Subscribe Easy Tutorials Youtube Channel to watch more
videos</p>
<button type="button" class="btn btn-primary">About Us</button>
</div>
<div class="col-md-7 register-right">
<div class="wrapper ten">
        <div>
            <h3 class="bounce">
                <span>R</span>
                <span>E</span>
                <span>G</span>
                <span>I</span>
                <span>S</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
            </h3>
        </div>
    </div>
<div class="register-form"></div>
<div class="form-group">
<label for="Name"><input type="text" class="form-control" placeholder="Name" required/> </label>
</div>
<div class="form-group">
<label for="Username"><input type="text" class="form-control" placeholder="Username" pattern="[a-z]{8}" title="only 8 characters allowded" required/></label>
</div>
<div class="form-group">
<label for="Email"><input type="email" class="form-control"  placeholder="Email" required/></label>
</div>
<div class="form-group">
<label for="Password"><input type="password" class="form-control" placeholder="Password" pattern="[A-Za-z0-9]{8}" title="only upto 8 characters with number or alphabets of your choice" required/></label>
</div>
<label for="submit"><input type="submit" class="btn btn-primary" value="Register"/></label>
</div>
</div>
</div>
</div>
</div>
</Container>
  )
}

export default Reg