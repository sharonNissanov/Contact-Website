import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoverPage from './components/CoverPage'
import About from './components/About'
import MyCV from './components/pictures/‏‏CV_Sharon_Nissanov.pdf';
import Skills from './components/Skills'
import Contact from './components/Contact'
import Popup from 'reactjs-popup';
import mail from './components/pictures/mail.jpg';
import linkedin from './components/pictures/linkedin.jpg';
import github from './components/pictures/github.jpg';
import phone from './components/pictures/phone.jpg';
import whatsapp from './components/pictures/whatsapp.jpg';

export default function App () {

      return (

      <div class="container-sm" className="App" >

      <CoverPage />

      <div className="Popups" > 
      <Popup   style={styles.popup} trigger={<button  style={styles.button}> About</button>} ><About/></Popup>
      <button style={styles.button}  onClick={() => {window.open('https://github.com/sharonNissanov')}}>Projects</button>
      <Popup trigger={<button  style={styles.button}> Skills</button>} ><Skills/></Popup>
      <Popup trigger={<button  style={styles.button}> Contact</button>} ><Contact/></Popup>
      <br></br>
      <a  style={styles.button}  href={MyCV} download > DOWNLOAD MY CV</a>
      <Popup trigger={<img src={mail} className="Mail-logo" />} ><Contact/></Popup>

      <img src={linkedin} className="Linkedin-logo" onClick={() => {window.open('https://www.linkedin.com/in/sharon-nissanov/')}} />

      <img src={github} className="Github-logo" onClick={() => {window.open('https://github.com/sharonNissanov')}} />

      <a href="tel:+972525496864" ><img src={phone} className="Phone-logo"/> </a> 

      <img src={whatsapp} className="Whatsapp-logo"  onClick={() => 
      { window.location.href = "whatsapp://send?text=Hi Sharon, I would like to contact you regarding your resume, when are you available ? &phone=+972525496864"}} />

      </div>
      </div>
  );
}


const styles={
  popup: {
   top: "65%",
   left: "500%", 
   margin: 0 ,
   padding: 0,
   display: "flex",
  
 },
 button:{
  width:"250px",
  background:"black",
  border:"solid",
  color:"white",
  fontFamily:"cursive",
  cursor:"pointer",wordSpacing: "7px",padding: 5,

  }
 }