/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { colors } from '../emotion-variables'
import { Grid } from './index'

const Tool = styled.span`
  background-color: ${props => colors[props.tool]};
  border-radius: ${props => (props.option === 'all' ? '0' : '50%')};
  width: 1rem;
  height: 1rem;
`
const grid = css`
  column-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, 1rem);
  justify-content: center;
`

const ToolBullets = ({ name, tools }) => {
  const toolsExist = ['node', 'database', 'react', 'graphql']
  const filteredTools = tools.filter(tool =>
    toolsExist.includes(tool.toLowerCase())
  )

  if (filteredTools.length) {
    return (
      <Grid css={grid}>
        {filteredTools.map(tool => (
          <Tool key={`${name}-{${tool}}`} tool={tool.toLowerCase()} />
        ))}
      </Grid>
    )
  } else {
    return null
  }
}

ToolBullets.propTypes = {
  tools: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}

export default ToolBullets
