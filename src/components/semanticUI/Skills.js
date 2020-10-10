import React from 'react'
import {Transition, Button, Header, Icon, Modal } from 'semantic-ui-react'
import './Semantic.css';

function Skills() {
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


    const SkillsText=()=>(
      <div style={{  borderRadius: 0,padding: '2em',backgroundColor:"grey",}}>
      {/* , textAlign:chosen_language==="English" ? null : "right" */}
       <h2 style={{textAlign:chosen_language==="English" ? null : "right" }}>
         {chosen_language==="English" ? " My skills" : "הכישורים שלי" }</h2>
  
        <h3> 
          Web Technologies: HTML, CSS, JavaScript, React JS, Express JS, Node.js, WordPress, Bootstrap, Material UI, Semantic UI, GitHub, etc.
          <br></br>
          Programming languages: C, C ++, Java.
          <br></br>
          In-depth knowledge in Object-Oriented Programming, algorithms and data structures.
          <br></br>
          {/* Operating Systems: Linux, Windows.
          <br></br> */}
        </h3>
  
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
        <div>
        <Transition visible={visible} animation='scale' duration={1400} >
        <Button >{chosen_language==="English" ? "Skills" : "כישורים" }</Button>
        </Transition>
        </div>}
      >
        <Header icon>
        <Icon name='pencil alternate' />
      
        </Header>
        <Modal.Content>
          <SkillsText/>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button basic color='red' inverted onClick={() => setOpen(false)}>
            <Icon name='remove' /> No
          </Button> */}
          <Button inverted onClick={() => setOpen(false)}>
            <Icon name='remove'  /> {chosen_language==="English" ? "close" : "סגור"}
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
  

  export default Skills;