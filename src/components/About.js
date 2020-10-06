import React from 'react';
import '../App.css';

export default function About() {
  return (
    <div style={styles.aboutStyle} >
     
      <h1 > Hey there! </h1>
        {/* <br></br>
        I'm Sharon Nissanov -  */}
        <h3>I'm a software engineering graduate - GPA 89.</h3>
  
        {/* I'm looking for a junior position in software development. */}
      <h3>I've Recently completed developing a project for a security organization using:<br></br>
      React JS,React-Redux, NodeJS, and MongoDB.<br></br>
      I am highly motivated and have excellent interpersonal skills<br></br>
      and looking for my next challenge in software development.
      </h3>

    </div>
  );
}
const styles={
  aboutStyle: {
    background:"#cccbcb",
    color:"#676767",
    cursor:"pointer",
    borderRadius:"8px"
  }
}
