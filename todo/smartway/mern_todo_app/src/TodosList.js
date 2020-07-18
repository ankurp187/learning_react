import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed?'completed':''} > {props.todo.todo_description} </td>
        <td className={props.todo.todo_completed?'completed':''} > {props.todo.todo_responsible} </td>
        <td className={props.todo.todo_completed?'completed':''} > {props.todo.todo_priority} </td>
        <td> <Link to={"/edit/"+props.todo._id} >Edit</Link> </td>
    </tr>
);

export default class TodosList extends React.Component {

    constructor(props){
        super(props);
        this.state = {todos:[]};
    }

    todoList(){
        return this.state.todos.map(function(currentTodo,i){
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    componentDidMount(){
        axios.get('http://localhost:5000/todos')
        .then(response=>{
            this.setState({todos:response.data});
        }).catch(err => {
            console.log(err);
        })
    }

    render(){
        return (
            <div>
                <h3>Todo List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
