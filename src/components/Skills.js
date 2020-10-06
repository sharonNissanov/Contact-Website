import React from 'react';
import '../App.css';

export default function Skills() {
  return (
    <div style={styles.skillstStyle}>
     <h1>My skills</h1>
      <h3>Programming Languages: C, C ++, Java, Python, JavaScript, CSS, HTML.
        <br></br>
        Development environments: ReactJS, NodeJS, WordPress.
        <br></br>
        In-depth knowledge in OO Programming, algorithms and data structures.
        <br></br>
        Operating Systems: Linux, Windows.
        <br></br>
      </h3>

    </div>
  );
}

const styles={
    skillstStyle: {
      background:"#cccbcb",
      color:"#676767",
      cursor:"pointer",
      borderRadius:"8px"
    }

}
