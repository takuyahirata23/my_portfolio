import React, { Component } from 'react'
import { Provider } from './context'
import './../sass/App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import projects from './../projects.json'
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
    detailInfo: {},
    selections: [
      {
        isClicked: true,
        name: 'all'
      },
      {
        isClicked: false,
        name: 'sass'
      },
      {
        isClicked: false,
        name: 'react'
      },
      {
        isClicked: false,
        name: 'node'
      },
      {
        isClicked: false,
        name: 'database'
      },
    ],
    projects: []
  }

  componentDidMount() {
    this.setState({
      projects: projects
    })
  }
  
  updatePath = (path, ob) => {
    const targetPath = `/work/${path.replace(' ', '').toLowerCase()}`

    this.setState({
      detailPath: targetPath,
      targetProject: ob
    })
  }

  handleSelection = (e) => {
    const target = e.target.getAttribute('id');
    this.setState(prev => ({
      selections: prev.selections.map(selection => {
        if(selection.name === target) {
          return {
            ...selection,
            isClicked: true,
          } 
        } else {
          return {
            ...selection,
            isClicked: false
          }
        }
      })
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <Provider value={{
          projects: this.state.projects,
          selections: this.state.selections,
          actions: {
            updatePath: this.updatePath,
            handleSelection: this.handleSelection
          }
        }}>
          <div className="App">
            <Header />
            <div className="main-wrapper">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/work" component={Work}/>
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
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App;
