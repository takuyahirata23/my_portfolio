import React from 'react'
import Testimonial from './Testimonial'
import pic from './../img/gsap_template.svg'

const Home = () => {
  return (
    <div className="section-wrapper">
      <div className="animation-wrapper">
        <object data={pic} alt="image" type="image/svg+xml">Image</object>
      </div>
      <p className="home-msg">
        Hi! Thank you for visiting my portfolio site.<br />
        Feel free to check <a href="https://github.com/Takuya-H23">my code</a> and contact me if your are interested!.
      </p>
      <Testimonial />
    </div>
  )
}

export default Home