import React from 'react'
import { Transition , Button} from 'semantic-ui-react';
import MyCV from '../pictures/‏‏CV_Sharon_Nissanov.pdf';

function DownloadCV ()
{
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

    return(
        <div>
        <Transition visible={visible} animation='scale' duration={4000} >
        <Button><a  href={MyCV} style={{color:"#00000099"}} download >
        {chosen_language==="English" ? "DOWNLOAD MY CV" : "לצפיה בקורות חיים" }
       </a> </Button>
        </Transition>
         </div>
    )
}
 

export default DownloadCV;