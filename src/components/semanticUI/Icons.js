import React from 'react'
import { Icon , Transition} from 'semantic-ui-react'
import './Semantic.css';

function Icons() {

    const [visible , setVisible] = React.useState(false)

    React.useEffect(() => {
      setVisible(!visible) 
    }, visible);

return(
            
    <div>
        
        <Transition visible={visible} animation='scale' duration={4000} >
       
        <Icon.Group  container size='medium' className="Group">
        <div  className="Icons"  >
        <Icon.Group  container size='large' >
    
        <Icon loading size='big' name='circle notch' />
        <Icon name='whatsapp square' 
        onClick={() => 
        { window.location.href =
        "whatsapp://send?text=Hi Sharon, I would like to contact you regarding your resume, when are you available ?  &phone=+972525496864"}} />
        </Icon.Group>
        </div>
 
        <div  className="Icons"  >
        <Icon.Group size='large' container >
        <Icon loading size='big' name='circle notch' />
        <Icon name='linkedin square'
        onClick={() => {window.open('https://www.linkedin.com/in/sharon-nissanov/')}} />
        </Icon.Group>
        </div>
      
        <div  className="Icons"  >
        <Icon.Group size='large'>
        <Icon loading size='big' name='circle notch' />
        <Icon name='github square' 
        onClick={() => {window.open('https://github.com/sharonNissanov')}} />
        </Icon.Group>
        </div>


      
        <a href="tel:+972525496864" >
        <Icon.Group size='large'>
        <Icon loading size='big' color='black' name='circle notch' />
        <Icon color='black' name='call square'  />
        </Icon.Group>
        </a> 
    
        </Icon.Group>
        </Transition> 
    </div>
   )
}
export default Icons