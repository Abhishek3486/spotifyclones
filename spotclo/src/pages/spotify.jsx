import React, {useEffect,useState} from 'react'
// import './spotify.css'
import spotify from '../assets/Spotify_logo.png'
import bg from '../assets/spotify_md.png'
import font1 from "/home/chintech/Desktop/Spotify/spotclo/src/assets/fonts/lineto-circular-black.ttf"
import font2 from "/home/chintech/Desktop/Spotify/spotclo/src/assets/fonts/lineto-circular-pro-book.ttf"
import font3 from "/home/chintech/Desktop/Spotify/spotclo/src/assets/fonts/lineto-circular-pro-medium.ttf"
import styled from 'styled-components';

const Container = styled.div`
 background-image: url(${bg}); 
 background-repeat: no-repeat;
  background-size: cover;
  margin: -150px;
  height: 1130px;
 @font-face {
    src: url(${font1});
    font-family: lineto-black;
  }
  @font-face {
    src: url(${font2});
    font-family: lineto-pro-book;
  }
  @font-face {
    src: url(${font3});
    font-family: lineto-pro-medium;
  }

  a {
    color: #000;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .container {
    margin-top:100px;
  }

  .main-nav {
    display: flex;
    background-color: rgba(25, 20, 20, 0.65);
    align-items: center;
    height: 80px;
    padding: 70px 0;
    position: fixed;
    z-index: 3;
    width: 100%;
    margin-left:-269px;
  }
  .main-nav ul {
    display: flex;
  }
  .main-nav ul.nav-options li {
    margin-top: 60px;
    margin-left: 50px;
  }
  .main-nav ul.nav-options {
    flex: 1;
    margin-left: 800px;
    font-family: 'lineto-black';
    width: 100px;
    font-size: 16px;
    letter-spacing: -0.8px;
    margin-top: 1px;
    font-weight: bold;
  }
  .white-text {
    color: #fff;
    margin-right: 20px;
  }
  .grey-text {
    color: #dcdcdc;
  }
  img.spotify-logo {
    margin-left: 150px;
    width: 8%;
    margin-top:50px
  }
  .line {
    border: 0.5px solid white;
    margin-top: 1.8px;
    height: 16px;
  }

  .cards {
    display: grid;
    z-index: 1;
  }
  
 
  .container {
    top: 39em;
    background-image: url("../assets/spotify_md.png");
    background-repeat: no-repeat;
    background-size: 100% 62em;
    height: 990px;
    width: 1833px;
    
  }
  .card2-text-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    height: 35em;
  }
  .card2-text {
    font-family: lineto-black;
    font-weight: bolder;
    color: #fff;
    letter-spacing: -1.2px;
    font-size: 78px;
    margin-top: auto;
  }
  .card2-text2 {
    color: #fff;
    font-family: lineto-pro-book;
    margin-top: 25px;
    font-size: 21px;
  }
  
    .btn-green {
    position: relative;
    border: none;
    background-color: #1db954;
    width: 215px;
    height: 500px;
    padding: 16px;
    top: 18px;
    right: 114px;
    border-radius: 25px;
  }
  
  .btn-white-text {
    box-sizing: border-box;
   
    color: #ffffff;
    font-size: 16px;
    font-family: lineto-pro-book;
    letter-spacing: 2px;
  }
  
  .btn-green-card2 {
    position: relative;
    border: none;
    background-color: #1db954;
    width: 245px;
    height: 50px;
    padding: -10px;
    top: 45px;
    right: 10px;
    border-radius: 25px;
  }

  a.green:hover {
    color: #1db954;
  }
  
  
  
  
  .btn-green:hover,
  .btn-green-card2:hover {
    background-color: #21ce61;
    transform: scale(1.06);
  }
 
  .nav-btn {
    position: fixed;
    top: 14px;
    right: 60px;
    z-index: 4;
    display: none;
  }
  
  
  .spotify-logo-sidebar {
    display: none;
  }

  .count{
    margin-top: -50px;
    color: black;
    margin-left: -10px;
  }

  @media screen and (max-width: 768px ) {
  .container{
    width: 100%;
    height: 954px;
  }
  img.spotify-logo {
  width: 140px;
  margin-left: 10px;
  }
  .main-nav ul.nav-options {
  margin-left: 100px;
  margin-top: 20px;
  font-size: 15px;
  display : flex ;
  flex-direction: column;
  padding-left:0;
  }
  .line{
    display: none;
  }
}
`;



export const Spotify = () => {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    console.log(value);
  },[value])

  return (
    <Container>
     <div class="nav-btn">
      <i class="fa fa-bars fa-2x"></i>
      <i class="fa fa-close fa-2x"></i>
    </div>
    <div class="container">
      <nav class="main-nav">
        <img class="spotify-logo" src={spotify} />
        <ul class="nav-options">
          <li><a href="#" class="white-text green">Premium</a></li>
          <li><a href="#" class="white-text green">Help</a></li>
          <li><a href="#" class="white-text green">Download</a></li>
          <li><div class="line"></div></li>
          <li><a href="./reg" class="grey-text green">Sign up</a></li>
          <li><a href="./login" class="grey-text green">Log In</a></li>
          <img class="spotify-logo-sidebar display" src={spotify}/>
        </ul>
      </nav>
      <div class="cards">
        <div class="card-2">
          <div class="card2-text-container">
            <h1 class="card2-text">Music for everyone.</h1>
            <h5 class="card2-text2">Millions of songs. No credit card needed.</h5>
            <button type="button" class="btn-green-card2 btn-white-text" onClick={()=>setValue(value+1)}><h5>GET SPOTIFY FREE</h5></button>
            <div class="count">
            <h3>count:{value}</h3>
            </div>
          </div>
        </div>
        
     
      </div>
    </div>
    </Container>
  )
}

export default Spotify