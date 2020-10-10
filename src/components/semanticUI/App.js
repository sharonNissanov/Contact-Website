import React from 'react'
import './Semantic.css'
import CoverPage from './CoverPage'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import DownloadCV from './DownloadCV'
import Icons from './Icons'
import LanguageDropdown from './LanguageDropdown'
import {Grid, Divider, Button} from 'semantic-ui-react'
import {isMobileOnly} from "react-device-detect";


export default function App () {

   React.useEffect(() => { 
    try{ 
     const check_lan = localStorage.getItem("Language");
      if(check_lan===null)
      {   
        localStorage.setItem("Language", "English");
      }
    }catch(e){
        console.log(e)
      } 
    }, ); 

      return (
        <div className="App1">
         <LanguageDropdown/>
        <Grid container rows={3} centered stretched padded="vertically">
        {/* <Button fluid>Fits to Container</Button> */}
        {isMobileOnly?  <Grid.Row >  <CoverPage size={"18px"} />     </Grid.Row>: 
         <Grid.Row  >  <CoverPage  />     </Grid.Row>
        }

        <Grid.Row >  <About/>         </Grid.Row>
        <Grid.Row >  <Skills/>        </Grid.Row>
        <Grid.Row >  <Contact />       </Grid.Row>
        <Grid.Row > <DownloadCV/>      </Grid.Row>
        {/* <div only="computer"></div> */}
        <Grid.Row  only="large screen" >     <Divider></Divider>     </Grid.Row>
   
        <Grid.Row  > <Icons/>      </Grid.Row>  
        </Grid> 
      </div>
      
  );
}
