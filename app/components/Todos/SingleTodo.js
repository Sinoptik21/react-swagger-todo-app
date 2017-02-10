import React from 'react';
import Axios from 'axios';
import Moment from 'moment';

class SingleTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleTodoChange(e) {
    const updatedTodo = this.props.todo;
    updatedTodo.todo = e.target.value;
    this.props.displayTodo(updatedTodo);
  }

  handleAuthorChange(e) {
    const updatedTodo = this.props.todo;
    updatedTodo.author = e.target.value;
    this.props.displayTodo(updatedTodo);
  }

  handleDateChange(e) {
    const updatedTodo = this.props.todo;
    updatedTodo.duedate = e.target.value + ':00.000Z';
    console.log(updatedTodo.duedate);
    this.props.displayTodo(updatedTodo);
  }

  handleCompleted(e) {
    const updatedTodo = this.props.todo;
    updatedTodo.completed = e.target.checked;
    this.props.displayTodo(updatedTodo);
  };

  handleUpdate() {
    Axios.put(`http://localhost:10010/todo/${this.props.todo.todo_id}`, this.props.todo)
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    const duedate = this.props.todo.duedate ? Moment(this.props.todo.duedate, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DDTHH:mm:ss.SSS') : '';
    const completed = this.props.todo.completed ? true : false;
    return (
      <div>
        <div>
          <input type="text" className="form-control" placeholder="Задание" value={this.props.todo.todo} onChange={this.handleTodoChange} />
          <input type="text" className="form-control" placeholder="Автор" value={this.props.todo.author} onChange={this.handleAuthorChange} />
          <input type="datetime-local" className="form-control" value={duedate} step={1} onChange={this.handleDateChange} />
          <input id="completed" type="checkbox" checked={completed} onClick={this.handleCompleted}/><label htmlFor="completed">&nbsp;выполнено</label>
        </div>
        <div>
          <button className="btn btn-default" type="button" onClick={this.handleUpdate}>Сохранить</button>
        </div>
      </div>
    )
  }
};

SingleTodo.propTypes = {
  displayTodo: React.PropTypes.func.isRequired
};

export default SingleTodo;
