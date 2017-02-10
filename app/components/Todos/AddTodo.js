import React from 'react';

const newTodo = {
  todo: '',
  datecreated: new Date(),
  author: '',
  duedate: new Date(),
  completed: false
};

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.setTodo = this.setTodo.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setRef(ref) {
    this.todo = ref;
  }

  setTodo(ref) {
    console.log(ref);
    newTodo.todo_id = ref.value;
  }

  handleTodo(e) {
    newTodo.todo = e.target.value;
  }

  handleAuthor(e) {
    newTodo.author = e.target.value;
  }

  handleDate(e) {
    newTodo.duedate = new Date(e.target.value);
  }

  handleSubmit() {
    this.props.addTodo(newTodo);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" className="form-control" placeholder="Новое задание" onChange={this.handleTodo} />
          <input type="text" className="form-control" placeholder="Автор" onChange={this.handleAuthor} />
          <input type="datetime-local" className="form-control" onChange={this.handleDate}/>
        </div>
        <div>
          <button className="btn btn-warning" type="button" onClick={this.handleSubmit}><i className="fa fa-plus"></i> Добавить</button>
        </div>
      </div>
    )
  }
};

AddTodo.propTypes = {
  addTodo: React.PropTypes.func.isRequired
};

export default AddTodo;
