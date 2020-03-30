/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fonts, mqs } from '../emotion-variables'

const Paragraph = styled.p`
  font: ${props => (!props.secondary ? fonts.p.primary : fonts.p.secondary)};
  color: ${colors.black};
`

const P = ({ children, secondary = false, ...props }) => {
  return (
    <Paragraph secondary={secondary} {...props}>
      {children}
    </Paragraph>
  )
}

P.propTypes = {
  children: PropTypes.node.isRequired
}

export default P
