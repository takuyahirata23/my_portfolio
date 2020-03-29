import React, { useEffect, useContext, useState } from 'react'
import { ProjectContext } from './../context/projects/ProjectContext'
import { Link, useParams } from 'react-router-dom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import NotFound from './NotFound'

const Details = ({ match }) => {
  const { projects } = useContext(ProjectContext)
  const { project: param } = useParams()
  const [currentProject, setCurrentProject] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentProject(
      projects.find(
        project => project.name === param.replace(/-/g, ' ').toUpperCase()
      )
    )
  }, [param, projects])

  if (currentProject === undefined) {
    return <NotFound />
  }

  return (
    <section className="section-wrapper detail" id="detail">
      <h1>{currentProject.name}</h1>
      <p className="date">{currentProject.date}</p>
      <div className="detail-links">
        <a
          href={currentProject.links.git}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>REPOSITORY</span>
          <FaArrowAltCircleRight className="detail-icon" />
        </a>

        {currentProject.links.project ? (
          <a
            href={currentProject.links.project}
            target="_blank"
            rel="noopener        noreferrer"
          >
            <span className="last-span">PROJECT</span>
            <FaArrowAltCircleRight className="detail-icon" />
          </a>
        ) : null}
      </div>

      <div className="detail-info-wrapper">
        <div>
          <h2>OVERVIEW</h2>
          <p>{currentProject.overview}</p>
        </div>

        <div>
          <h2>OBJECTIVE</h2>
          <p>{currentProject.objective}</p>
        </div>

        <div className="tools-wrapper">
          <h2>TOOLS</h2>
          <ul>
            {currentProject.tools.map(tool =>
              tool === 'Database' ? null : <li key={tool}>-{tool}</li>
            )}
          </ul>
        </div>
      </div>

      <div className="link-back">
        <Link to="/work">
          <FaArrowAltCircleLeft className="back-icon" />
          <span>Back</span>
        </Link>
      </div>
    </section>
  )
}

export default Details
