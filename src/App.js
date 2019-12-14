import "./styles/styles.scss";
import React, { Component } from 'react';
import UserList from "./components/UserList"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Project from "./components/Project"
import Loading from "./components/Loading";
import { getUsers, getProfile, getProject } from "./components/APIcalls";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.noAvatar = "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png";
    this.state = {
      header: <div />,
      page: <Loading />,
      data: "",
      history: [],
      props: {},
      users: [],
      currentUser: false,
    }
  }

  getPersonFromHistory(name) {
    return this.state.history.findIndex(current => current.username === name)
  }

  addPersonToHistory(data, name) {
    let history = [...this.state.history];
    let index = history.findIndex(current => current.username === (name ? name : data.user.screen_name))

    if(index < 0) {  
      // remove oldest         
      if(history.length >= 5) {
        let idx = 0;
        for(let i = 1; i < history.length; i++) { if(history[i].time < history[idx].time) idx = i; }
        history.splice(idx, 1);
      }

      history.push({
        username: name ? name : data.user.screen_name,
        name: data.name,
        profession: data.profession,
        avatar: data.avatar.thumb2x ? data.avatar.thumb2x : this.noAvatar,
        visited: [],
        time: Date.now(),
      })
      index = history.length - 1;
    }
    else { history[index].time = Date.now(); }
    return [history, index];
  }
  addProjectToHistory(data) {
    // If coming from profile page
    let history;
    let index = this.state.currentUser ? this.getPersonFromHistory() : -1;
    if(index < 0) [history, index] = this.addPersonToHistory(data.author.profile, data.author.screen_name);
    else  history = [...this.state.history];
    
    const project = {
      title: data.title,
      thumbnail: data.thumbnail,
      id: data.id,
    }

    let idx = history[index].visited.findIndex(current => current.id === project.id);
    if(idx >= 0) {  
      history[index].visited.splice(idx, 1);
    }

    if(history[index].visited.length >= 6) history[index].visited.pop();
    history[index].visited.unshift(project);
    return history;
  }

  changePage(page, param) {
    switch(page) {
      case "UserList":    
        getUsers()
        .then(data => {    
          this.setState({
            page: <UserList users={ data.users } noAvatar={ this.noAvatar } changePage={this.changePage.bind(this)}/>,
            currentUser: false
          }); 
        }); 
        break;
      case "Profile": 
        getProfile(param)
        .then(data => {           
          this.setState({
            page: <Profile profile={ data[0] } time={Date.now()} works={ data[1][0] } tags={ data[1][1] } noAvatar={this.noAvatar} changePage={this.changePage.bind(this)} />,
            history: this.addPersonToHistory(data[0])[0],
            currentUser: data[0].user.screen_name,
          })
        })
        break;
      case "Project": 
        getProject(param)
        .then(data => {
          this.setState({
            page: <Project noAvatar={this.noAvatar} {...data} changePage={this.changePage.bind(this)} />,
            history: this.addProjectToHistory(data)
          })
        })
        break;
      default: 
        page = <Loading />; 
        break;
    }
    window.scrollTo(0, 0);
  }

  componentDidMount() {   
    this.changePage('UserList');
  }

  render() {    
    return (
      <div className="App">
        <Header history={ this.state.history } changePage={this.changePage.bind(this)}/>
            <div className="main">              
              { this.state.page }
            </div>
      </div>
    );    
  }
}
