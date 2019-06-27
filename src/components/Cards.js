import React from 'react'
import { Consumer } from './context'
import { Link } from 'react-router-dom'
import Tools from './Tools'

const Cards = () => (
  <Consumer>
    {({projects, actions}) => (
      <div className="works">
        {projects.map(project => (
          <div key={project.id}>
            <Link 
              to={`/work/${project.name.replace(' ', '').toLowerCase()}`} 
              onClick={() => actions.updatePath(project.name, project)}
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
    )}
  </Consumer>
)

export default Cards