import React from 'react';
import { Button, Header, Icon, Modal, Transition } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import './Semantic.css';

function Contact() {

    const [open, setOpen] = React.useState(false)
    const [visible , setVisible] = React.useState(false)
    const [chosen_language , setChosen_language] = React.useState(null)

    React.useEffect(() => {
      try{ 
        const chosen_lan = localStorage.getItem("Language");
        if(chosen_lan!==null){ 
          setChosen_language(chosen_lan)
     
        }
      }catch(e){
          console.log(e)
      } 
  
      setVisible(!visible) 
    },  [setVisible]);
  
  
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'template_k3cbnqu', e.target,  'user_QyM0107Dq9pJYRXyQsmFD')
          .then((result) => {
            setOpen(false)
          }, (error) => {
            alert("somethimg went wrong");
          });
      }

      const styles={
        textBox:{
          textAlign: chosen_language==="English" ? null : "right" ,
          minHeight: "100%",
          minWidth:"90%",
          borderRadius:"20px",
          // color:"black"
        },
        send:{
          borderRadius:"20px",
          minHeight: "100%",
          minWidth:"30%",
          color:"grey"
        }
    }

      const Form=()=>(
        <div style={{ opacity:"0.55",borderRadius:"20px", padding: '2em', backgroundColor:"grey",  textAlign:chosen_language==="English" ? null : "right"  }}>
        <h2 > {chosen_language==="English" ? "Email me " : " שלחו לי מייל"} </h2> 
        <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>{chosen_language==="English" ? "NAME " : " שם "} </label>
        <br></br>
        <input type="text" name="user_name" style={styles.textBox} />
        <br></br>
        <label>{chosen_language==="English" ? "EMAIL " : " כתובת מייל"} </label>
        <br></br>
        <input type="email" name="user_email" style={styles.textBox}/>
        <br></br>
        <label>{chosen_language==="English" ? "MESSAGE " : "הודעה"} </label>
        <br></br>
        <textarea name="message" style={styles.textBox} />
        <br></br>
        <input type="submit"  value={chosen_language==="English" ? "Send " : "שלח"} style={styles.send} />
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
        <Button>  {chosen_language==="English" ? "Contact" : "יצירת קשר" }</Button>
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
          <Icon name='remove' />  {chosen_language==="English" ? "close" : "סגור"}
        </Button>
      </Modal.Actions>
      </Modal>
    )
  }
  export default Contact;