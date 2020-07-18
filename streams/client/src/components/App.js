import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
//HashRouter and MemoryRouter
//This link is to be used in place of bad anchor tags and 'to' prop will be used in place of 'href'
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';
// path="/streams/edit/:id" can be /streams/edit/:anything that is it will respond if anything after /streams/edit
// ':' is to stop hard coding

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component = {StreamList}/>
            <Route path="/streams/new" exact component = {StreamCreate}/>
            <Route path="/streams/edit/:id" exact component = {StreamEdit}/>
            <Route path="/streams/delete/:id" exact component = {StreamDelete}/>
            <Route path="/streams/:id" exact component = {StreamShow}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
