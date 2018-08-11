import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises/Exercises';
import { muscles, exercises } from '../store';

export default class App extends Component {
  constructor() {
    super();
    this.state = { exercises, category: 'legs' };
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles]
        ?
        [...exercises[muscles], exercise]
        : [exercise];
      return exercises;
    }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }




  render() {
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
