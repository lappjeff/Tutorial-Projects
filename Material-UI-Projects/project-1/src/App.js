import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom'

//Material UI imports
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

//Style sheet import
import './App.scss'

//Custom Component imports
import { Header, Footer } from './components/Layouts'
import Exercises from './components/Exercises'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Exercises />
        
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
