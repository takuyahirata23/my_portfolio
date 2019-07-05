import React, { Component } from 'react'
import projects from './../../projects.json'

const ProjectContext = React.createContext()

export class Provider extends Component {

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
      {
        isClicked: false,
        name: 'Node'
      },
      {
        isClicked: false,
        name: 'Database'
      },
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
    return(
      <ProjectContext.Provider value={{
        projects: this.state.projects,
        selections: this.state.selections,
        actions: {
          handleSelection: this.handleSelection,
          getCurrentSelection: this.getCurrentSelection,
          filterProjects: this.filterProjects
        }
      }}>
        { this.props.children}
      </ProjectContext.Provider>
    )
  }
}

export const Consumer = ProjectContext.Consumer