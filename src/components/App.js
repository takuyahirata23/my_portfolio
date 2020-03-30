/** @jsx jsx */
import { useEffect, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProjectContext } from './../context/projects/ProjectContext'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Normalize } from './atoms'
import Header from './templates/Header'
import Home from './pages/Home'
import Work from './Work'
import Profile from './Profile'
import Details from './Details'
import NotFound from './NotFound'

const MainWrapper = styled.main`
  max-width: 120rem;
  margin: 7rem auto 0;
  padding: 2rem;
`

const App = () => {
  const { fetchProjects } = useContext(ProjectContext)
  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <BrowserRouter>
      <Normalize />
      <div className="App">
        <Header />
        <MainWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route path="/profile" component={Profile} />
            <Route path="/work/:project" component={Details} />
            <Route component={NotFound} />
          </Switch>
        </MainWrapper>
      </div>
    </BrowserRouter>
  )
}

export default App
