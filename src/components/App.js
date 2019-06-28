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
    selections: [
      {
        isClicked: true,
        name: 'all'
      },
      {
        isClicked: false,
        name: 'Sass'
      },
      {
        isClicked: false,
        name: 'React'
      },
      // {
      //   isClicked: false,
      //   name: 'Node'
      // },
      // {
      //   isClicked: false,
      //   name: 'Database'
      // }
    ],
    projects: []
  }

  componentDidMount() {
    this.setState({
      projects: projects
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

  getCurrentSelection = (selectionArray) => {
    const selectedTool = selectionArray.filter(selection => selection.isClicked)
    return selectedTool[0].name
  }

  filterProjects = (projectsArray, selectedTool) => {
    if (selectedTool === 'all') {
      return projectsArray
    } else {
      return projectsArray.filter(project => project.tools.includes(selectedTool))
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Provider value={{
          projects: this.state.projects,
          selections: this.state.selections,
          actions: {
            handleSelection: this.handleSelection,
            getCurrentSelection: this.getCurrentSelection,
            filterProjects: this.filterProjects
          }
        }}>
          <div className="App">
            <Header />
            <div className="main-wrapper">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/work" component={Work}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/work/:project" component={Details}/>
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
