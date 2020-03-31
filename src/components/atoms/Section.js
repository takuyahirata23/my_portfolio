/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { mqs, space } from './../emotion-variables'

const Wrapper = styled.section`
  margin-bottom: ${space.margin.dividerXs};
  ${mqs.md} {
    margin-bottom: ${space.margin.dividerMd};
  }
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
