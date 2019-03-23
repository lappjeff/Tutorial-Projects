import React, { Component, Fragment } from 'react';

//Material UI imports
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'


//Style sheet import
import './App.scss'

//Custom Component imports
import { Header, Footer } from './components/Layouts'
import Exercises from './components/Exercises'
import {muscles, exercises} from './components//store.js'


class App extends Component {
  state = {
    exercises
  }

  getExercises() {
    return Object.entries(
        this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

          return exercises
      }, {})
    )
  }

  render() {
    const exercises = this.getExercises()
    return (
      <Fragment>
        <Header />

        <Exercises
          exercises={exercises}
        />

        <Footer muscles={muscles}/>
      </Fragment>
    );
  }
}

export default App;
