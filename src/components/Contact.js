
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
    <div > 
    <form style={styles.contactStyle} className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Your name</label>
      <br></br>
      <input type="text" name="user_name" />
      <br></br>
      <label>Your Email</label>
      <br></br>
      <input type="email" name="user_email" />
      <br></br>
      <label>Your message</label>
      <br></br>
      <textarea name="message" />
      <br></br>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}

const styles={
    contactStyle: {
      background:"#cccbcb",
      color:"#676767",
      cursor:"pointer",
      borderRadius:"8px",
      width:300,
      minHeight:300,

    }
}
