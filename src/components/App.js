import React, { useEffect, useContext } from 'react'
import './../sass/App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProjectContext } from './../context/projects/ProjectContext'
import Header from './Header'
import Home from './Home'
import Work from './Work'
import Profile from './Profile'
import Details from './Details'
import NotFound from './NotFound'

const App = () => {
  const { fetchProjects } = useContext(ProjectContext)
  useEffect(() => {
    fetchProjects()
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route path="/profile" component={Profile} />
            <Route path="/work/:project" component={Details} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
