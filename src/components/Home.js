import React from 'react'
import Testimonial from './Testimonial'
import pic from './../img/opening_animation.svg'

const Home = () => {
  return (
    <div className="section-wrapper">
      <div className="animation-wrapper">
        <object data={pic} alt="image" type="image/svg+xml">Image</object>
      </div>
      <p className="home-msg">
        Hi! Thank you for visiting my portfolio site.<br />
        Feel free to check <a href="https://github.com/Takuya-H23">my code</a> and <a href="mailto:takuyahirata4@gmail.com">contact</a> me if your are interested!.
      </p>
      <Testimonial />
    </div>
  )
}

export default Home