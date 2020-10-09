import React from 'react'
import { Transition , Button} from 'semantic-ui-react';
import MyCV from '../pictures/‏‏CV_Sharon_Nissanov.pdf';

function DownloadCV ()
{
    const [visible , setVisible] = React.useState(false)

    React.useEffect(() => {
      setVisible(!visible) 
    }, visible);

    return(
        <div>
        <Transition visible={visible} animation='scale' duration={4000} >
        <Button size="medium"><a  href={MyCV} style={{color:"#00000099"}} download > DOWNLOAD MY CV</a> </Button>
        </Transition>
         </div>
    )
}
 

export default DownloadCV;