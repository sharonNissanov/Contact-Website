import React from 'react'
import './Semantic.css'
import CoverPage from './CoverPage'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import DownloadCV from './DownloadCV'
import Icons from './Icons'
import LanguageDropdown from './LanguageDropdown'
import {Grid, Divider,Segment} from 'semantic-ui-react'
import {isMobileOnly} from "react-device-detect";
import ParticlesBack from "../background/ParticlesBack"

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
          {/* <ParticlesBack/> */}
         <LanguageDropdown/>
{/* 
         <Grid container columns={1}    className="Grid">
      <Grid.Column>
          {isMobileOnly ?   <CoverPage size={"18px"} />  : <CoverPage  />  }
      </Grid.Column>
      <Grid.Column >
                      <About/>        
      </Grid.Column>
      <Grid.Column>
                      <Skills/>
      </Grid.Column>
      <Grid.Column>
                     <Contact />
      </Grid.Column>
      <Grid.Column>
                    <DownloadCV/>
      </Grid.Column>
      
      <Grid.Column>
       <Icons/>    
      </Grid.Column>
    </Grid> */}



        <Grid container rows={3} centered stretched padded="vertically">
       
        {isMobileOnly?  <Grid.Row >  <CoverPage size={"18px"} />     </Grid.Row>: 
         <Grid.Row  >  <CoverPage  />     </Grid.Row>
        }

        <Grid.Row >  <About/>         </Grid.Row>
        <Grid.Row >  <Skills/>        </Grid.Row>
        <Grid.Row >  <Contact />       </Grid.Row>
        <Grid.Row > <DownloadCV/>      </Grid.Row>
      
        <Grid.Row  only="large screen" >     <Divider> </Divider>     </Grid.Row>
   
        <Grid.Row  > <Icons/>      </Grid.Row>  
        </Grid> 
      </div>
      
  );
}
