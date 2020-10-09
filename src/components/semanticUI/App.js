import React from 'react'
import './Semantic.css'
import CoverPage from './CoverPage'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import DownloadCV from './DownloadCV'
import Icons from './Icons'

import {Grid, Divider} from 'semantic-ui-react'

export default function App () {

      return (
        <div className="App1">
        <Grid container rows={3} centered stretched padded="vertically">
        {/* <Grid.Row  only='mobile' >  <CoverPage size={"18px"} />     </Grid.Row> */}
        <Grid.Row  only="large screen" >     <Divider></Divider>     </Grid.Row>
        <Grid.Row >  <CoverPage  />     </Grid.Row>
        {/* <Grid.Row  only="large screen" >     <Divider></Divider>     </Grid.Row> */}
        <Grid.Row >  <About/>         </Grid.Row>
        <Grid.Row >  <Skills/>        </Grid.Row>
        <Grid.Row >  <Contact />       </Grid.Row>
        <Grid.Row > <DownloadCV/>      </Grid.Row>
        {/* <div only="computer"></div> */}
        <Grid.Row  only="large screen" >     <Divider></Divider>     </Grid.Row>
   
        <Grid.Row  > <Icons/>      </Grid.Row>
        {/* <Divider ><Icons/></Divider>  */}
        
         </Grid> 
      </div>
      
  );
}
