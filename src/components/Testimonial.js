import React, { Component } from 'react';
import testimonials from './../testimonials.json'
import { GoQuote } from 'react-icons/go'

class Testimonials extends Component {

  state = {
    testimonials: []
  }

  componentDidMount() {
    this.setState({
      testimonials: testimonials
    })
  }

  render() {
    return (
      <div className="testimonials-wrapper">
        {this.state.testimonials.map(item => (
          <div className="testimonial" key={item.name}>
            <GoQuote />
            <p className="testimonial-msg">{item.testimonial}</p>
            <h2>{item.name}</h2>
            <p className="testimonial-company">{item.company}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Testimonials;