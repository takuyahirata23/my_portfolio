/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from '../emotion-variables'
import { Grid } from './index'

interface Props  {
  name: string;
  tools: Array<string>; 
} 

type toolsType = 'node' | 'database' | 'react' | 'graphql' | 'functionalprogramming'
// type toolsType = [key: 'node' | 'database' | 'react' | 'graphql' | 'functionalprogramming']

const toolsExist = [
  'node',
  'database',
  'react',
  'graphql',
  'functionalprogramming',
]

const ToolBullets: React.FC<Props> = ({ name, tools }) => {
  const filteredTools = tools.filter(tool =>
    toolsExist.includes(tool.toLowerCase().replace(/ /g, ''))
  )

  if (filteredTools.length) {
    return (
      <Grid css={grid}>
        {filteredTools.map(tool => (
          <Tool
            key={`${name}-{${tool}}`}
            tool={tool.toLowerCase().replace(/ /g, '')}
          />
        ))}
      </Grid>
    )
  } else {
    return null
  }
}

const Tool = styled.span<{ tool: string, option?: string}>`
  background-color: ${({ tool }) => colors[tool]};
  border-radius: ${props => (props.option === 'all' ? '0' : '50%')};
  width: 1rem;
  height: 1rem;
`
const grid = css`
  column-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, 1rem);
  justify-content: center;
`

export default ToolBullets
