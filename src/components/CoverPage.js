import React from 'react';
import '../App.css';
import hello from './pictures/hello.png';
function CoverPage() {
  return (
    <div className="CoverPage">
    
      <h1 style={styles.logo} >Hello!
      <img src={hello} className="App-logo"  />
        <br></br>
        I'm Sharon Nissanov - 
        <br></br>
        A software engineering graduate.
        <br></br>
        I'm looking for a junior position in software development.
        <br></br>
      </h1>

    </div>
  );
}

export default CoverPage;

const styles={
 logo: {
 

}
}