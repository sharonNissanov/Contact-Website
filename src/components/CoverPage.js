import React from 'react';
import '../App.css';
import hello from './pictures/hello.png';


export default function CoverPage() {
  return (
    <div className="CoverPage">
       <h1><span class="badge badge-secondary">
        Hello! <tab style={styles.space}>.</tab>
      <img src={hello} className="App-logo"  />
        <br></br>
        I'm Sharon Nissanov 
        <br></br>
        A software engineering graduate.
        <br></br>
        I'm looking for a junior position in software development.
        <br></br>
        </span></h1>

    </div>
  );
}



const styles={
 space: {
  color:"white",
  fontSize:"8px",
  //textShadow: "0px 0px 0 white",

  }
}