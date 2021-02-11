/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fonts, mqs, space } from '../emotion-variables'

interface StyleProps {
  secondary?: boolean,
  margin?: boolean 
  tertiary?: boolean
}

interface Props {
  children: React.ReactNode,
}



export const H1: React.FC<Props & StyleProps> = ({ children, secondary = false, margin, ...props }) => {
  return (
    <Heading1 secondary={secondary} margin={margin} {...props}>
      {children}
    </Heading1>
  )
}

const Heading1 = styled.h1<StyleProps>`
  font: ${(props) => (props.secondary ? fonts.h1.secondary : fonts.h1.primary)};
  color: ${colors.black};
  margin-bottom: ${(props) => (props.margin ? space.margin.xs : 0)};
  ${mqs.sm} {
    font-size: 3rem;
  }
  ${mqs.md} {
    font-size: ${(props) => (props.secondary ? '3rem' : '3.3rem')};
  }
  ${mqs.lg} {
    font-size: ${(props) => (props.secondary ? '3.3rem' : '5rem')};
  }
`



export const H2: React.FC<Props & StyleProps> = ({ children, secondary = false, margin, ...props }) => {
  return (
    <Heading2 secondary={secondary} margin={margin} {...props}>
      {children}
    </Heading2>
  )
}

const Heading2 = styled.h2<StyleProps>`
  font: ${(props) => (props.secondary ? fonts.h2.secondary : fonts.h2.primary)};
  color: ${colors.black};
  margin-bottom: ${(props) => (props.margin ? space.margin.xs : 0)};
`


export const H3: React.FC<Props & StyleProps> = ({
  children,
  secondary = false,
  tertiary,
  margin,
  ...props
}) => {
  return (
    <Heading3
      secondary={secondary}
      margin={margin}
      tertiary={tertiary}
      {...props}
    >
      {children}
    </Heading3>
  )
}


const Heading3 = styled.h3<StyleProps>`
  font: ${(props) => (props.secondary ? fonts.h3.secondary : fonts.h3.primary)};
  color: ${colors.black};
  margin-bottom: ${(props) => (props.margin ? space.margin.xs : 0)};
`

H3.propTypes = {
  children: PropTypes.string.isRequired,
}
