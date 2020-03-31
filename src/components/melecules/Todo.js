/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { H3, P } from './../atoms'
import { colors, space, mqs } from './../emotion-variables'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const h3 = css`
  color: ${colors.tertiary};
`

const Todo = ({ children, title, text }) => {
  return (
    <Grid>
      {children}
      <div>
        <H3 css={h3} margin>
          {title}
        </H3>
        <P>{text}</P>
      </div>
    </Grid>
  )
}

Todo.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
