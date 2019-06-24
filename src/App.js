import React, { Component } from 'react'
import './sass/App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/work" component={Work}/>
          <Route path="/profile" component={Profile}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
