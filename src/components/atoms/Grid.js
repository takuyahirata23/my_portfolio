/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { space } from './../emotion-variables'

const GridWrapper = styled.div`
  display: grid;
  margin-bottom: ${props => (props.margin ? space.margin.dividerXs : 0)};
`

const Grid = ({ children, margin, ...props }) => {
  return (
    <GridWrapper margin={margin} {...props}>
      {children}
    </GridWrapper>
  )
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Grid
