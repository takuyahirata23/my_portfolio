/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fonts, space } from '../emotion-variables'

interface Props {
  children: React.ReactChildren;
  secondary: boolean,
  margin: boolean
}


const P: React.FC<Props> = ({ children, secondary = false, margin = false, ...props }) => {
  return (
    <Paragraph secondary={secondary} margin={margin} {...props}>
      {children}
    </Paragraph>
  )
}

const Paragraph = styled.p<{secondary: boolean, margin: boolean}>`
  font: ${props => (!props.secondary ? fonts.p.primary : fonts.p.secondary)};
  color: ${colors.black};
  margin-bottom: ${props => (props.margin ? space.margin.xs : 0)};
`


export default P
