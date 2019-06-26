import React, { Component } from 'react'
import './../sass/App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Work from './Work'
import Profile from './Profile'
// import Footer from './Footer'
import Details from './Details'
import NotFound from './NotFound'


class App extends Component {

  state = {
    detailPath: '',
    detailInfo: {}
  }
  
  updatePath = (path, ob) => {
    const targetPath = `/work/${path.replace(' ', '').toLowerCase()}`

    this.setState({
      detailPath: targetPath,
      targetProject: ob
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="main-wrapper">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/work" render={() => <Work updatePath={this.updatePath}/>}/>
              <Route path="/profile" component={Profile}/>
              {this.state.detailPath.length > 0 
                ? <Route path={this.state.detailPath} render={() => <Details project={this.state.targetProject}/>}/>
                : null
              }
              <Route component={NotFound} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
