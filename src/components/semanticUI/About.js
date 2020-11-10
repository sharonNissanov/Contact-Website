import React from 'react'
import './Semantic.css';
import {  Button, Header, Icon, Modal, Transition } from 'semantic-ui-react'

function About() {
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
  }, [setVisible]);



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
        <Button>{chosen_language==="English" ? "About" : "על עצמי" }</Button>
        </Transition>
        </div>}
    >
      <Header icon>
        <Icon name='lightbulb outline' />
      </Header>
      <Modal.Content>
      {chosen_language==="English" ? <AboutEnglishText/> :<AboutHebrewText/> } 
      </Modal.Content>

      <Modal.Actions>
        <Button inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> {chosen_language==="English" ? "close" : "סגור"}
        </Button>
      </Modal.Actions>
    </Modal>

  )
}



const AboutEnglishText=()=>(
  <div style={{ padding: '2em',backgroundColor:"grey",borderRadius:"20px" }}>
   
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

const AboutHebrewText=()=>(
  <div style={{padding: '2em',backgroundColor:"grey",textAlign: "right", }}>
   
   <h2> !היי</h2> 
   <h3> בת 23, בוגרת תואר בהנדסת תוכנה - ממוצע 89
      <br></br>
לאחרונה פיתחתי מערכת לארגון בטחוני ע"י שימוש ב

 <br></br>
 NodeJS , React-Redux, React JS  .MongoDB -ו <br></br>
  אני בעלת מוטבציה גבוהה מאוד וכישורים בין אישיים מצוינים
  ומחפשת את האתגר הבא שלי בפיתוח תוכנה
  </h3>
</div>
)



export default About;