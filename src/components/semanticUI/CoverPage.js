import React, { Component } from 'react';
import hello from '../pictures/hello.png';
import './Semantic.css';
import { Transition ,Placeholder} from 'semantic-ui-react';
import LanguageDropdown from './LanguageDropdown'

export default class TransitionExampleTransition extends Component{
  state = { visible: false, chosen_language:null }

  toggleVisibility = () =>
  this.setState((prevState) => ({ visible: !prevState.visible }))

  componentDidMount(){
    try{ 
      const chosen_lan = localStorage.getItem("Language");
      if(chosen_lan!==null){ 
       this.setState({chosen_language:chosen_lan})
      }
    }catch(e){
        console.log(e)
    } 
    this.toggleVisibility()
  }


  English_text = () => (
    <Transition visible={this.state.visible} animation='scale' duration={700}>     
    <Placeholder > 
    <Placeholder.Paragraph style={{fontSize: this.props.size}}>
    <Placeholder.Line />Hello!
    <Placeholder.Line />I'm Sharon Nissanov
    <Placeholder.Line /> A software engineering graduate.
    <Placeholder.Line />I'm looking for a position in software development
    </Placeholder.Paragraph>
    </Placeholder>
    </Transition>
  )
  Hebrew_text = () => (
    <Transition visible={this.state.visible} animation='scale' duration={700}>     
    <Placeholder > 
    <Placeholder.Paragraph style={{fontSize: this.props.size}}>
    <Placeholder.Line />שלום
    <Placeholder.Line />אני שרון ניסנוב
    <Placeholder.Line /> בוגרת תואר בהנדסת תוכנה
    <Placeholder.Line />מחפשת  משרה בתחום הפיתוח 
    </Placeholder.Paragraph>
    </Placeholder>
    </Transition>
  )

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

    render() {
      const { visible, chosen_language } = this.state
      
      return (
        <div className="CoverPage1">
          {chosen_language==="English"? this.English_text() :this.Hebrew_text()}
        </div>
      )
    }
}  


