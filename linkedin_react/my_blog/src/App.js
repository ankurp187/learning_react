import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './NavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
// import Toolbar from './Toolbar';
// import SideDrawer from './SideDrawer/SideDrawer';
// import Backdrop from './BackDrop/Backdrop';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
// import backDrop from './BackDrop/Backdrop';

class App extends Component {
  // state={
  //   sideDrawerOpen : false
  // };

  // drawerToggleClickHandler = () =>{
  //   this.setState((prevState) => {
  //     return {sideDrawerOpen:!prevState.sideDrawerOpen};
  //   });
  // }

  // backdropClickHandler = () => {
  //   this.setState({sideDrawerOpen:false});
  // }


  render(){
    // let backdrop;

    // if(this.state.sideDrawerOpen){
    //   backdrop   = <Backdrop style={{width:'100%'}} click={this.backdropClickHandler} />;
    // }

    return (
      <BrowserRouter>
        <div className="App">
        {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/> */}
        {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
        {/* {backdrop} */}
        <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
