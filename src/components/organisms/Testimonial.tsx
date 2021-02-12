/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import testimonials from '../../testimonials.json'
import { GoQuote } from 'react-icons/go'
import { Card, Section, P } from '../atoms'
import { colors, mqs } from '../emotion-variables'


const Testimonials: React.FC = () => {
  return (
    <Section css={testimonialWrapper}>
      {testimonials.map(item => (
        <Card key={item.name}>
          <GoQuote css={quoteIcon} />
          <P css={testimonialText} margin>
            {item.testimonial}
          </P>
          <P margin>{item.name}</P>
          <P secondary>{item.company}</P>
        </Card>
      ))}
    </Section>
  )
}

const testimonialWrapper = css`
  display: grid;
  row-gap: 2rem;
  ${mqs.md} {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

const testimonialText = css`
  font-style: italic;
  line-height: 2;
`
const quoteIcon = css`
  fill: ${colors.primary};
`

export default Testimonials
