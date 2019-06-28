import React from 'react'
import { Consumer } from './context'

const Selection = () => (
  <Consumer>
    {({selections, actions}) => (
      <div className="selections-wrapper">
        {selections.map(selection => 
        <div 
          className={`choice ${selection.name.toLowerCase()} ${selection.isClicked? 'active': ''}`} 
          key={selection.name}
          id={selection.name}
          onClick={actions.handleSelection}
        >
          {selection.name.toUpperCase()}
        </div>)}
      </div>
    )}
  </Consumer>
)

export default Selection