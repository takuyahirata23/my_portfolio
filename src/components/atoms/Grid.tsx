/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { space } from '../emotion-variables'

interface Props {
  children: React.ReactChild,
  margin: boolean;
}


const Grid: React.FC<Props> = ({ children, margin = false, ...props }) => {
  return (
    <GridWrapper margin={margin} {...props}>
      {children}
    </GridWrapper>
  )
}

const GridWrapper = styled.div<{margin: boolean}>`
  display: grid;
  margin-bottom: ${props => (props.margin ? space.margin.dividerXs : 0)};
`

export default Grid
