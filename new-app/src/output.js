import React, { Component } from 'react';
import Todo from './todo';
class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
        this.deleteTask = this.deleteTask.bind(this);
        this.outputFunc = this.outputFunc.bind(this);
        this.updateText = this.updateText.bind(this);
    }
    addNew = (text) => {
        let arr = this.state.tasks;
        arr.push(text);
        this.setState ({ tasks: arr });
    } 
    deleteTask = (i) => {
        let arr = this.state.tasks; 
        arr.splice(i, 1);
        this.setState ({ tasks: arr });
    }
    
    updateText = (text, i) => {
        let arr = this.state.tasks;;   
        arr[i] = text;
        this.setState ({ tasks: arr });
    }
    outputFunc(item, i) {
        return (
            <Todo key={i} index={i} deleteBlock={this.deleteTask} update={this.updateText}>
                {item}
            </Todo>
        );
    }
    render() {
        return (
            <div className="output">
                <button onClick={this.addNew.bind(null, 'Введите Вашу задачу')} className="addNew" >Новая задача</button>
                { this.state.tasks.map(this.outputFunc) } 
            </div>    
        );
    }
}


export default Output;