import React from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'template_k3cbnqu', e.target,  'user_QyM0107Dq9pJYRXyQsmFD')
      .then((result) => {
         alert("Great!");
         window.location.reload()
      }, (error) => {
        alert("somethimg went wrong");
      });
  }

  return (
    <div className="Email">
       <h2 > Email me </h2> 
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label> NAME</label>
      <br></br>
      <input type="text" name="user_name" style={styles.textBox} />
      <br></br>
      <label> EMAIL</label>
      <br></br>
      <input type="email" name="user_email" style={styles.textBox}/>
      <br></br>
      <label>MESSAGE </label>
      <br></br>
      <textarea name="message" style={styles.textBox} />
      <br></br>
      <input type="submit" value="Send" style={styles.send} />
    </form>
    </div>
  );
}

const styles={
    textBox:{
      minHeight: "100%",
      minWidth:"90%",
    },
    send:{
      fontFamily:"cursive", 
      minHeight: "100%",
      minWidth:"30%",
    }
}
