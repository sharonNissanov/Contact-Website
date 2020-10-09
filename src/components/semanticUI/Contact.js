import React from 'react';
import { Button, Header, Icon, Modal, Transition } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import './Semantic.css';

function Contact() {

    const [open, setOpen] = React.useState(false)
    const [visible , setVisible] = React.useState(false)

    React.useEffect(() => {
      setVisible(!visible) 
    }, visible);
  
  
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'template_k3cbnqu', e.target,  'user_QyM0107Dq9pJYRXyQsmFD')
          .then((result) => {
            setOpen(false)
          }, (error) => {
            alert("somethimg went wrong");
          });
      }
      const Form=()=>(
        <div style={{ borderRadius: 0,
            // opacity: 0.6,
            padding: '2em',
            backgroundColor:"grey",}}>
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
  )
  

    return (
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={  
        <div >
        <Transition visible={visible} animation='scale' duration={2000} >
        <Button size="medium" >Contact</Button>
        </Transition>  </div>
        }
        >
        <Header icon>
          <Icon name='mail outline' />
        </Header>
        <Modal.Content>
          <Form/>
        </Modal.Content>

        <Modal.Actions>
        <Button inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> close
        </Button>
      </Modal.Actions>
      </Modal>
    )
  }
  

  const styles={
    textBox:{
      minHeight: "100%",
      minWidth:"90%",
    },
    send:{
    //  fontFamily:"Georgia", 
      minHeight: "100%",
      minWidth:"30%",
      color:"grey"
    }
}


  export default Contact;