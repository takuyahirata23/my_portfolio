/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { H3, P } from '../atoms'
import { colors, mqs } from '../emotion-variables'

interface Props {
  children: React.ReactNode,
  title: string,
  text: React.ReactNode 
}

const Todo: React.FC<Props>= ({ children, title, text }) => {
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 1.5rem;
  ${mqs.sm} {
    grid-template-columns: 1fr 6fr;
  }
  ${mqs.md} {
    grid-template-columns: 1fr 7fr;
  }
`

const h3 = css`
  color: ${colors.secondary};
`

export default Todo
