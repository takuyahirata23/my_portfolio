import React, { useContext } from 'react'
import { ProjectContext } from './../context/projects/ProjectContext'

const Selection = () => {
  const { filter, setFilter } = useContext(ProjectContext)
  const options = ['All', 'Sass', 'React', 'Node', 'Database']

  return (
    <div className="selections-wrapper">
      {options.map(option => (
        <div
          className={`choice ${option.toLowerCase()} ${
            option.toLowerCase() === filter ? 'active' : ''
          }`}
          key={option}
          id={option}
          onClick={() => setFilter(option.toLowerCase())}
        >
          {option}
        </div>
      ))}
    </div>
  )
}
export default Selection
