import React from 'react'
import Selection from './Selection'
import Cards from './Cards'

const Work = () => {
  return (
    <section className="section-wrapper">
      <p className="work-description">
        These are some projects I developed.<br />
        If you are interested in my code, please click on a link on the project page.
      </p>
      <div>
        <Selection />
      </div>
      <Cards />
    </section>
  )
}

export default Work