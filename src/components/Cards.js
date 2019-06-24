import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Tools from './Tools'
import Details from './Details'

const Cards = ({works}) => (
  <div className="works">
    {works.map(work => (
      <div key={work.id}>
        <Link to={`/work/${work.name.replace(' ', '').toLowerCase()}`}>
          <div className="outer-box">
            <div className="inner-box">
              <div className="project-name">{work.name}</div>
            </div>
          </div>
        </Link>
        <div className="tools">
          <Tools tools={work.tools} id={work.id}/>
        </div>
        <Route path="work/yokohama" component={Details}/>
      </div>      
    ))}
  </div>
)

Cards.propTypes = {
  works: PropTypes.array.isRequired
}

export default Cards