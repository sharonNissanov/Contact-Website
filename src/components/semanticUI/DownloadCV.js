import React from 'react'
import { Transition , Button} from 'semantic-ui-react';
import ENMyCV from '../pictures/‏‏CV_Sharon_Nissanov.pdf';
import HeMyCV from '../pictures/HE_CV_Sharon_Nissanov.pdf';

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
          {chosen_language==="English" ? 
        <Transition visible={visible} animation='scale' duration={4000} >
        <Button><a  href={ENMyCV} style={{color:"#00000099"}} download >
        DOWNLOAD MY CV
       </a> </Button>
        </Transition>:
        <Transition visible={visible} animation='scale' duration={4000} >
        <Button>
        <a  href={HeMyCV} style={{color:"#00000099"}} download >
          הורדת קורות חיים
        </a> </Button>
        </Transition>

          }
         </div>
    )
}
 

export default DownloadCV;