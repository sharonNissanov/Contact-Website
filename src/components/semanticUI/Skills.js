import React from 'react'
import {Transition, Button, Header, Icon, Modal } from 'semantic-ui-react'
import './Semantic.css';

function Skills() {
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
        <Transition visible={visible} animation='scale' duration={1400} >
        <Button size="medium">Skills</Button>
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
            <Icon name='remove'  /> close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
  
  const SkillsText=()=>(
    <div style={{  borderRadius: 0,
          // opacity: 0.6,
          padding: '2em',
          backgroundColor:"grey",
        }}>
    
     <h2>My skills</h2>
      <h3>Programming languages: C, C ++, Java, JavaScript, CSS3, HTML5.
        <br></br>
        Development environments: ReactJS, NodeJS, WordPress.
        <br></br>
        In-depth knowledge in OO Programming, algorithms and data structures.
        <br></br>
        Operating Systems: Linux, Windows.
        <br></br>
      </h3>

    </div>
  )
  
  export default Skills;