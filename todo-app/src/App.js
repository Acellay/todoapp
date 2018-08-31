import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

function List(props) {
  return (
    <ul>
      {props.todo.map( (todo, i) => {
        if(todo.title) {
          return <li key={i}><input type="button" value="x" onClick={() => props.deleteTodo(i)} /> {todo.title}</li>
        } else {
          return false;
        }
      })}
    </ul>
  )
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    this.props.addTodo(this.refs.newText.value);
    this.refs.newText.value = '';
  }
  render() {
    return (
      <div>
        <input type="text" ref="newText" />
        <input type="button" value="追加" onClick={this.addTodo} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        'title': '',
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  // 新規追加
  addTodo(value) {
    this.state.todo.push({
      title: value
    });
    this.setState({
      todo: this.state.todo
    });
  }
  //削除機能
  deleteTodo(i) {
    this.state.todo.splice(i, 1);
    this.setState({
      todo: this.state.todo
    });
  }

  render() {
    return (
      <div>
        <Input addTodo={this.addTodo} />
        <List todo={this.state.todo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
