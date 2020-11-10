import React from "react";
import Canvas from "./Canvas";

const styles = {
    root: {
    padding:"0",
    margin:"0",
    top:"0",
    left:"0",
    textAlign: "center",
    height: "100%",
    position:"absolute",
    background: "#f5f5ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    }
  };
  
  const ParticlesBack = () => (
    <div style={styles.root}>
      <Canvas />
    </div>
  );
  export default ParticlesBack