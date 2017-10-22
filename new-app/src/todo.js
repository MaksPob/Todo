import React, { Component } from 'react';
import './allTodo.css';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {add: false};
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
  }
  add() {
    this.setState({ add: true });
  }
  remove(i) {
    this.props.deleteBlock(i);
  }
  save() {
    let value = this.refs.newText.value;
    this.props.update(value, this.props.index);
    this.setState({ add: false });
  }
  rendNorm() {
    return (
      <div className="App">
        <div className="text">Задача: {this.props.children}</div>
        <button onClick={this.add.bind(this)} className="add" >Редактировать</button>
        <button onClick={this.remove.bind(this)} className="remove">Удалить</button>
      </div>
    );
  }
  rendAdd() {
  return (
    <div className="App">
      <textarea ref="newText" defaultValue={this.props.children}></textarea>
      <button onClick={this.save.bind(this)} className="save">Сохранить</button>
    </div>
  );
  }

  render() {
    if (this.state.add) {
      return this.rendAdd ();
    } else {
      return this.rendNorm ();
    }
  }
}

export default Todo; 

