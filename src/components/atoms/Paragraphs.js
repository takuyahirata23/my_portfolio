/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fonts, mqs, space } from '../emotion-variables'

const Paragraph = styled.p`
  font: ${props => (!props.secondary ? fonts.p.primary : fonts.p.secondary)};
  color: ${colors.black};
  margin-bottom: ${props => (props.margin ? space.margin.sm : 0)};
`

const P = ({ children, secondary = false, margin = false, ...props }) => {
  return (
    <Paragraph secondary={secondary} margin={margin} {...props}>
      {children}
    </Paragraph>
  )
}

P.propTypes = {
  children: PropTypes.node.isRequired
}

export default P
