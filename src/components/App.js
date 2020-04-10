/** @jsx jsx */
import { useEffect, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProjectContext } from './../context/projects/ProjectContext'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Normalize } from './atoms'
import { Header } from './organisms'
import Home from './pages/Home'
import Work from './pages/Work'
import Profile from './pages/Profile'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import { mqs, space } from './emotion-variables'

const MainWrapper = styled.main`
  max-width: 120rem;
  margin: ${space.header.xs} auto 0;
  padding: 5rem 2rem;
  ${mqs.sm} {
    padding: 6rem 2rem;
  }
  ${mqs.md} {
    margin-top: ${space.header.md};
    padding: 7rem 2rem;
  }
  ${mqs.lg} {
    padding: 10rem 2rem;
  }
`

const App = () => {
  const { fetchProjects, isLoading } = useContext(ProjectContext)
  useEffect(() => {
    fetchProjects()
    // eslint-disable-next-line
  }, [])

  if (isLoading) return <div>Loading...</div>

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
