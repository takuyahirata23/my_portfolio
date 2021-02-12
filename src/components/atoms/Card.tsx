/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}


const Card: React.FC<Props> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

const StyledCard = styled.div`
  border-radius: 3px;
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.3);
  padding: 2rem;
`

export default Card
