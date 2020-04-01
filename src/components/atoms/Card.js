/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const StyledCard = styled.div`
  border-radius: 3px;
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.3);
  padding: 2rem;
`

const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

export default Card
