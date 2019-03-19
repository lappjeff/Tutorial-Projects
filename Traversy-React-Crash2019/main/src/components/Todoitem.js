import React, { Component } from 'react'
import Proptypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todos: Proptypes.object.isRequired,
}

export default TodoItem
