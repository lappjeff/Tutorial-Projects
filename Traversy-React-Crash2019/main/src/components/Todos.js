import React, { Component } from 'react';
import TodoItem from './Todoitem';
import Proptypes from 'prop-types';

class Todos extends Component {
  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id } todo={todo} />
    ))
  }
}

//Prop types
Todos.propTypes = {
  todos: Proptypes.array.isRequired,
}
export default Todos;
