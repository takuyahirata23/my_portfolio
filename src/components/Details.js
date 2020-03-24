import React, { useEffect } from 'react'
import { Consumer } from './context'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import NotFound from './NotFound'

const Details = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Consumer>
      {({ projects }) => {
        const param = match.params.project.replace(/-/g, ' ').toUpperCase()
        const targetProject = projects.find(project => project.name === param)

        if (targetProject === undefined) return <NotFound />

        return (
          <section className="section-wrapper detail" id="detail">
            <h1>{targetProject.name}</h1>
            <p className="date">{targetProject.date}</p>
            <div className="detail-links">
              <a
                href={targetProject.links.git}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>REPOSITORY</span>
                <FaArrowAltCircleRight className="detail-icon" />
              </a>

              {targetProject.links.project ? (
                <a
                  href={targetProject.links.project}
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
                <p>{targetProject.overview}</p>
              </div>

              <div>
                <h2>OBJECTIVE</h2>
                <p>{targetProject.objective}</p>
              </div>

              <div className="tools-wrapper">
                <h2>TOOLS</h2>
                <ul>
                  {targetProject.tools.map(tool => (
                    <li key={tool}>-{tool}</li>
                  ))}
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
      }}
    </Consumer>
  )
}

export default Details
