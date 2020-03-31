/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useContext } from 'react'
import { ProjectContext } from '../../context/projects/ProjectContext'
import { colors, space } from '../emotion-variables'

const SelectionWrapper = styled.div`
  border-bottom: 1px solid ${colors.border};
  display: flex;
  flex-wrap: wrap;
`

const Option = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: ${space.margin.xs};
  border: ${props =>
    props.active
      ? `1.5px solid ${colors.secondary}`
      : '1.5px solid transparent'};
  padding: 0.3rem 1rem;
  position: relative;
  left: 1rem;

  :before {
    content: '';
    background-color: ${props => colors[props.option]};
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    left: -1rem;
    width: 0.5rem;
    height: 0.5rem;
  }
`

const Selection = () => {
  const { filter, setFilter } = useContext(ProjectContext)
  const options = ['All', 'React', 'Node', 'GraphQL', 'Database']

  return (
    <SelectionWrapper>
      {options.map(option => (
        <Option
          option={option.toLowerCase()}
          active={option.toLocaleLowerCase() === filter}
          key={option}
          onClick={() => setFilter(option.toLowerCase())}
        >
          {option}
        </Option>
      ))}
    </SelectionWrapper>
  )
}
export default Selection
