import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Tools from './Tools'

const Cards = ({works, updatePath}) => (
  <div className="works">
    {works.map(work => (
      <div key={work.id}>
        <Link to={`/work/${work.name.replace(' ', '').toLowerCase()}`} onClick={() => updatePath(work.name, work)}>
          <div className="outer-box">
            <div className="inner-box">
              <div className="project-name">{work.name}</div>
            </div>
          </div>
        </Link>
        <div className="tools">
          <Tools tools={work.tools} id={work.id}/>
        </div>
      </div>      
    ))}
  </div>
)

Cards.propTypes = {
  works: PropTypes.array.isRequired,
  updatePath: PropTypes.func.isRequired
}

export default Cards