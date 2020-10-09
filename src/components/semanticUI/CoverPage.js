import React, { Component } from 'react';
import hello from '../pictures/hello.png';
import './Semantic.css';
import { Transition ,Placeholder} from 'semantic-ui-react';


export default class TransitionExampleTransition extends Component{
  state = { visible: false }
  componentDidMount(){
    this.toggleVisibility()
  }
  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))
    render() {
      const { visible } = this.state
  
      return (
        <div className="CoverPage1">
        <Transition visible={visible} animation='scale' duration={700}>
        <Placeholder > 
        <Placeholder.Paragraph style={{fontSize: this.props.size}}>
        <Placeholder.Line />Hello!
        <Placeholder.Line />I'm Sharon Nissanov
        <Placeholder.Line /> A software engineering graduate.
        <Placeholder.Line />I'm looking for a junior position in software development
        </Placeholder.Paragraph>
        </Placeholder>
        </Transition>
        </div>
   
      )
    }

}

