import React from 'react';
import AddTodo from './AddTodo';

class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <h3>Добавить новое задание</h3>
        <AddTodo addTodo={this.props.addTodo} />
      </div>
    )
  }
};

NewTodo.propTypes = {
  addTodo: React.PropTypes.func.isRequired
};

export default NewTodo;
