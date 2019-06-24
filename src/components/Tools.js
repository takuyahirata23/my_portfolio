import React from 'react'
import PropTypes from 'prop-types'

const Tools = ({tools, id}) => {
  const toolsExist = ['node', 'database', 'react', 'sass'];
  const filteredTools = tools.filter(tool => toolsExist.includes(tool.toLowerCase()));

  if(filteredTools.length > 0) {
    return filteredTools.map(tool => <span className={tool.toLowerCase()} key={`id${tool}`}></span>) 
  } else {
    return null
  }
}

Tools.propTypes = {
  tools: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
}

export default Tools