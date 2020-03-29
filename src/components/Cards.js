import React, { useContext } from 'react'
import { ProjectContext } from './../context/projects/ProjectContext'
import { Link } from 'react-router-dom'
import Tools from './Tools'

const Cards = ({ match }) => {
  const { projects, filter } = useContext(ProjectContext)
  const currentProjects =
    filter === 'all'
      ? projects
      : projects.filter(project => {
          const tools = project.tools.map(item => item.toLowerCase())
          return tools.includes(filter)
        })

  return (
    <div className="works">
      {currentProjects.map(project => (
        <div key={project.id}>
          <Link
            to={`${match.url}/${project.name
              .toLowerCase()
              .replace(/\s/g, '-')}`}
          >
            <div className="outer-box">
              <div className="inner-box">
                <div className="project-name">{project.name}</div>
              </div>
            </div>
          </Link>

          <div className="tools">
            <Tools tools={project.tools} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
