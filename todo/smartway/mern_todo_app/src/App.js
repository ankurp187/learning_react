import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import TodosList from './TodosList';
import EditTodo from './EditTodo';
import CreateTodo from './CreateTodo';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

class App extends React.Component{
  render(){
    return (
        <BrowserRouter>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand" >Todo App </Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id"  component={EditTodo} />
            <Route path="/create" exact component={CreateTodo} />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
