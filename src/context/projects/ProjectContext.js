import React, { createContext, useReducer } from 'react'
import projectReducer from './projectReducer'
import { SET_IS_LOADING, FETCH_DATA_SUCCESS, SET_FILTER } from './actionType'
import arrayOfProjects from './../../projects.json'

const initialState = {
  isLoading: false,
  projects: [],
  filteredProjects: [],
  filter: 'all'
}

function makeAPICall() {
  return arrayOfProjects
}

export const ProjectContext = createContext(initialState)

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState)

  function setIsLoading(bool) {
    dispatch({ type: SET_IS_LOADING, isLoading: bool })
  }

  function fetchProjects() {
    const projects = makeAPICall()
    dispatch({ type: FETCH_DATA_SUCCESS, projects: projects })
  }

  function setFilter(value) {
    dispatch({ type: SET_FILTER, value })
  }

  return (
    <ProjectContext.Provider
      value={{
        isLoading: state.isLoading,
        filteredProjects: state.filteredProjects,
        filter: state.filter,
        setFilter,
        setIsLoading,
        fetchProjects
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
