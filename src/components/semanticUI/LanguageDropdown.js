import React,{createRef} from 'react'
import './Semantic.css';
import {  Button, Header, Icon, Modal, Transition } from 'semantic-ui-react'
import {  Rail, Sticky, Checkbox, Segment,  } from 'semantic-ui-react'

function LanguageDropdown() {
  const [open, setOpen] = React.useState(false)
  const [visible , setVisible] = React.useState(false)
  const [ifChecked , setIfChecked] = React.useState(true)
  const [chosen_language , setChosen_language] = React.useState(null)
  
  
  React.useEffect(() => {
    try{ 
      const check_lan = localStorage.getItem("Language");
      if(check_lan!==null){
        setChosen_language(check_lan)
        if(check_lan==="Hebrew")
          setIfChecked(false) 
      }
    }catch(e){
         console.log(e)
    }
    setVisible(!visible) 
  }, [setVisible]);


  return (
    
    <Segment compact className ="L" 
    style={{  borderRadius: 0,
       opacity: 0.7,
   //   padding: '2em',
     // backgroundColor:"grey",

    }}
    >
    <Checkbox size="big" checked={ifChecked} slider  
      label={chosen_language==="English" ? "עברית " : "English"} 
      
    
      onChange={()=>{
        try{ 
          const check_lan = localStorage.getItem("Language");
          if(check_lan==="English")
          { 
            localStorage.removeItem("Language") 
            localStorage.setItem("Language", "Hebrew");
          }
          if(check_lan==="Hebrew")
          {
            localStorage.removeItem("Language") 
            localStorage.setItem("Language", "English");
          }
         window.location.reload()
        }  

           catch(e){
             console.log(e)
           }  // window.location.reload()
         }
       
        
      }
  
      />
    </Segment >


    // <Modal className ="L" 
    //   basic
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
    //   open={open}
    //   size='small'
    //   trigger={
    //     <div>
    //     <Transition visible={visible} animation='scale' duration={1100} >
    //     <Button  >Change language</Button>
    //     </Transition>
    //     </div>}
    // >
    //   <Header icon >
   
    //     {/* <Icon name='exchange ' />   */}
    //     <h2>Choose the wanted language </h2> 
    //     <Segment compact p>
    //   <Checkbox size="big"  defaultChecked  label="English" toggle></Checkbox>
    //   </Segment >
    //   </Header>
    //   <Modal.Content>
    //    <Text/>
    //   </Modal.Content>

    //   <Modal.Actions>
    //     <Button inverted onClick={() => setOpen(false)}>
    //       <Icon name='remove' /> close
    //     </Button>
    //   </Modal.Actions>
    // </Modal>

  )
}

const Text=()=>(
  <div
   style={{  borderRadius: 0,
        // // opacity: 0.6,
        // padding: '2em',
        // backgroundColor:"grey",
        textAlign:"center",
        alignItems:"center",
      position:"initial"
      }}
      >
   {/* <h2>Choose the wanted language</h2> */}
      <Button> Hebrew</Button>
      <Icon name='exchange ' size="big" />  
      <Button> English</Button>
      <Segment compact position="center">
      <Checkbox size="big"  defaultChecked  label="English" toggle></Checkbox>
      </Segment >
</div>
)

export default LanguageDropdown