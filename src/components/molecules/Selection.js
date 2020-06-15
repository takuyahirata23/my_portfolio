/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useContext } from 'react'
import { ProjectContext } from '../../context/projects/ProjectContext'
import { colors } from '../emotion-variables'

const SelectionWrapper = styled.div`
  border-bottom: 1px solid ${colors.border};
  display: flex;
  flex-wrap: wrap;
`

const Option = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 2.5rem;
  border: ${props =>
    props.active
      ? `1.5px solid ${colors.secondary}`
      : '1.5px solid transparent'};
  padding: 0.3rem 1rem;
  position: relative;
  left: 1.5rem;

  :before {
    content: '';
    background-color: ${props => colors[props.option]};
    border-radius: ${props => (props.option === 'all' ? '0' : '50%')};
    position: absolute;
    top: 0.7rem;
    left: -1.7rem;
    width: 0.8rem;
    height: 0.8rem;
  }
`

const Selection = () => {
  const { filter, setFilter } = useContext(ProjectContext)
  const options = [
    'All',
    'React',
    'Functional Programming',
    'GraphQL',
    'Node',
    'Database',
  ]

  return (
    <SelectionWrapper>
      {options.map(option => (
        <Option
          option={option.toLowerCase().replace(/ /g, '')}
          active={option.toLocaleLowerCase().replace(/ /g, '') === filter}
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
