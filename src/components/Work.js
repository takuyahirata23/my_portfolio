import React, { Component } from 'react'
import Selection from './Selection'
import works from './../works.json'
import Cards from './Cards'

class Work extends Component {
  state = {
    selections: [
      {
        isClicked: true,
        name: 'all'
      },
      {
        isClicked: false,
        name: 'sass'
      },
      {
        isClicked: false,
        name: 'react'
      },
      {
        isClicked: false,
        name: 'node'
      },
      {
        isClicked: false,
        name: 'database'
      },
    ],
    works: []
  }

  componentDidMount() {
    this.setState({ works })
  }

  // Question: Why I do not need to return works property and its values?
  handleSelection = (e) => {
    const target = e.target.getAttribute('id');
    this.setState(prev => ({
      selections: prev.selections.map(selection => {
        if(selection.name === target) {
          return {
            ...selection,
            isClicked: true,
          } 
        } else {
          return {
            ...selection,
            isClicked: false
          }
        }
      })
    }))
  }

  render() {
    return (
      <section className="section-wrapper">
        <p className="work-description">
          These are some projects I developed.<br />
          If you are interested in my code, please click on a link on the project page.
        </p>
        <div>
          <Selection selections={this.state.selections} handleSelection={this.handleSelection}/>
        </div>
        <Cards works={this.state.works}/>
      </section>
    )
  }
}

export default Work