import React from 'react';
import PropTypes from 'prop-types'
import { FaArrowAltCircleRight} from 'react-icons/fa'

const Details = ({project}) => (
  <section className="section-wrapper detail">
    <h1>{project.name}</h1>
    <div className="detail-links">
      <a href={project.links.git} target="_blank" rel="noopener noreferrer"><span>REPOSITORY</span><FaArrowAltCircleRight className="detail-icon"/></a>
      <a href={project.links.project} target="_blank" rel="noopener noreferrer"><span>PROJECT</span><FaArrowAltCircleRight className="detail-icon"/></a>
    </div>
    <div className="detail-info-wrapper">
      <div>
        <h2>OVERVIEW</h2>
        <p>{project.overview}</p>
      </div>

      <div>
        <h2>OBJECTIVE</h2>
        <p>{project.objective}</p>
      </div>

      <div className="tools-wrapper">
        <h2>TOOLS</h2>
        <ul>
          {project.tools.map(tool => <li key={tool}>-{tool}</li>)}
        </ul>
      </div>
    </div>
  </section>
)

Details.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Details