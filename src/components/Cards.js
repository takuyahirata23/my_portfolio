import React from 'react'
import { Consumer } from './context'
import { Link } from 'react-router-dom'
import Tools from './Tools'

const Cards = ({match}) => (
  <Consumer>
    {({projects, selections, actions}) => {
      
      const selectedProjects = actions.filterProjects(projects, actions.getCurrentSelection(selections))
   
      return (
        <div className="works">
          {selectedProjects.map(project => (
            <div key={project.id}>
              <Link 
                to={`${match.url}/${project.name.toLowerCase().replace(/\s/g, '-')}`} 
              >
                <div className="outer-box">
                  <div className="inner-box">
                    <div className="project-name">{project.name}</div>
                  </div>
                </div>
              </Link>

              <div className="tools">
                <Tools tools={project.tools}/>
              </div>
            </div>      
          ))}
        </div>
      )
    }}
  </Consumer>
)

export default Cards