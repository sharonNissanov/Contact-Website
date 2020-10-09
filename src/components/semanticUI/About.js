import React from 'react'
import './Semantic.css';
import {  Button, Header, Icon, Modal, Transition } from 'semantic-ui-react'

function About() {
  const [open, setOpen] = React.useState(false)
  const [visible , setVisible] = React.useState(false)

  React.useEffect(() => {
    setVisible(!visible) 
  }, visible);

  return (

    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={
        <div>
        <Transition visible={visible} animation='scale' duration={1100} >
        <Button size="medium" >About</Button>
        </Transition>
        </div>}
    >
      <Header icon>
        <Icon name='lightbulb outline' />
      </Header>
      <Modal.Content>
        <AboutText/>
      </Modal.Content>

      <Modal.Actions>
        <Button inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> close
        </Button>
      </Modal.Actions>
    </Modal>

  )
}



const AboutText=()=>(
  <div style={{  borderRadius: 0,
        // opacity: 0.6,
        padding: '2em',
        backgroundColor:"grey",
      }}>
   
   <h2> Hey there!</h2> 
   <h3> I'm 23 years old and a software engineering graduate- GPA 89.
      <br></br>

  I've recently completed developing a project for a security organization using:<br></br>
  React JS, React-Redux, NodeJS, and MongoDB.<br></br>
  I am highly motivated and have excellent interpersonal skills
  and looking for my next challenge in software development.
  </h3>
</div>
)


export default About;