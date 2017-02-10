import React from 'react';
import Moment from 'moment';

class AllTodos extends React.Component {
  handleSelect(todo) {
    this.props.displayTodo(todo);
  }

  render() {
    const _this = this;
    if (this.props.todos.length) {
      const todos = this.props.todos.map((todo, index) => {
        const duedate = todo.duedate ? Moment(todo.duedate, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('DD-MM-YYYY HH:mm:ss') : '';
        const completed = todo.completed ? 'list-group-item list-group-item-success' : 'list-group-item list-group-item-danger';
        return (
          <li className={completed} key={index}>
            <div>
              <a href="#" onClick={_this.handleSelect.bind(_this, todo)}><span className="text-info">{todo.todo}</span></a>
            </div>
            <div>
              Срок: <span className="text-info">{duedate}</span>
            </div>
          </li>
        )
      });
      return (
        <div>{todos}</div>
      )
    }
    else {
      return (
        <div>Список дел пуст!</div>
      )
    }
  }
}

AllTodos.propTypes = {
  displayTodo: React.PropTypes.func.isRequired
};

export default AllTodos;
