/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { mqs, space } from '../emotion-variables'

const Section: React.FC<{ children: React.ReactChild}> = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

const Wrapper = styled.section`
  margin-bottom: ${space.margin.dividerXs};
  ${mqs.md} {
    margin-bottom: ${space.margin.dividerMd};
  }
`

export default Section
