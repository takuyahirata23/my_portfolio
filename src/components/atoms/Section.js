/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin-bottom: 2rem;
`

const Section = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Section
