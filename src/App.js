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

export default function App () {

      return (
    <div> 
      {/* <img src={mail}   onClick={()=>{clickMail()}}  /> */}
    <div  className="App" >
    <CoverPage />

   <Popup trigger={<button style={styles.button} > About</button>}  position="bottom left" closeOnDocumentClick  style={styles.popup}  >
   {close =>(
    
   <a className="close"  style={styles.popup}>
            &times;
          <About/>   </a> )}
             </Popup>
   <button style={styles.button}  onClick={() => {window.open('https://github.com/sharonNissanov')}}>Projects</button>
   <Popup trigger={<button  style={styles.button}> Skills</button>}   position="bottom center"><Skills/></Popup>
   <Popup trigger={<button  style={styles.button}> Contact</button>}   position="bottom right"><Contact/></Popup>
   <br></br>
  <a  style={styles.button}  href={MyCV} download >My CV</a>
  <Popup trigger={<img src={mail} className="Mail-logo" />}   position="bottom right"><Contact/></Popup>

  <img src={linkedin} className="Linkedin-logo" onClick={() => {window.open('https://www.linkedin.com/in/sharon-nissanov/')}} />

  <img src={github} className="Github-logo" onClick={() => {window.open('https://github.com/sharonNissanov')}} />


  </div>




  </div>
  );
}


const styles={
  popup: {
   // background:"blue",
  
 },
 button:{
  width:"250px",
  background:"black",
  border:"solid",
  color:"white",
  fontFamily:"cursive",
  cursor:"pointer",

  }
 }