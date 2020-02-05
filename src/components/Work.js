import React from 'react'
import Selection from './Selection'
import Cards from './Cards'

const Work = ({ match }) => {
  return (
    <section className="section-wrapper">
      <p className="work-description">
        These are some projects I have developed.
        <br />
        If you are interested in my code, please click on the project link on
        any of the example pages.
      </p>
      <div>
        <Selection />
      </div>
      <Cards match={match} />
    </section>
  )
}

export default Work
