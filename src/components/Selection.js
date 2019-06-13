import React from 'react'
import PropTypes from 'prop-types'

const Selection = ({ selections, handleSelection }) => {
  return (
    <div className="selections-wrapper">
      {selections.map(selection => 
      <div className={`choice ${selection.name} ${selection.isClicked? 'active': ''}`} 
        key={selection.name}
        id={selection.name}
        onClick={handleSelection}
      >
        {selection.name.toUpperCase()}
      </div>)}
    </div>
  )
}

Selection.propTypes = {
  selections: PropTypes.array,
  handleSelection: PropTypes.func
}

export default Selection