import React, { Component } from 'react'
import testimonials from './../testimonials.json'
import { GoQuote } from 'react-icons/go'

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      {testimonials.map(item => (
        <div className="testimonial" key={item.name}>
          <GoQuote className="quote-icon" />
          <p className="testimonial-msg">{item.testimonial}</p>
          <h2>{item.name}</h2>
          <p className="testimonial-company">{item.company}</p>
        </div>
      ))}
    </div>
  )
}

export default Testimonials
