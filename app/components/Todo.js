import React from 'react';
import AllTodos from './Todos/AllTodos';
import SingleTodo from './Todos/SingleTodo';
import NewTodo from './Todos/AddTodo';
import Axios from 'axios';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          todo_id: '',
          todo: '',
          author: '',
          duedate: '',
          completed: ''
        }
      ],
      todo: {
        todo_id: '',
        todo: '',
        author: '',
        duedate: '',
        completed: ''
      }
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.displayTodo = this.displayTodo.bind(this);
  }

  componentDidMount() {
    const _this = this;
    Axios.get('http://localhost:10010')
      .then((res) => _this.setState({todos: res.data}));
  }

  handleAddTodo(newtodo) {
    newtodo.todo_id = this.state.todos.length + 1;
    Axios.post('http://localhost:10010', newtodo)
      .then((res) => console.log(res));
  }

  displayTodo(todo) {
    this.setState({todo: todo});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AllTodos todos={this.state.todos} displayTodo={this.displayTodo} />
          </div>
          <div className="col-md-4">
            <SingleTodo todo={this.state.todo} displayTodo={this.displayTodo} />
          </div>
          <div className="col-md-4">
            <NewTodo addTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    )
  }
};

export default Todo;
