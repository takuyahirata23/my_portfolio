/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { P, Section } from './../atoms'
import { colors, mqs, space } from './../emotion-variables'
import { Testimonial } from '../organisms'
import { H1 } from '../atoms'
// import pic from './../../img/opening_animation.svg'
const span = css`
  font: italic bold 1.8rem montserrat;
  background-color: ${colors.tertiary};
  display: inline-block;
  margin-bottom: ${space.margin.sm};
  ${mqs.md} {
    margin-bottom: ${space.margin.md};
  }
`

const br = css`
  ${mqs.sm} {
    display: none;
  }
`
const a = css`
  font-weight: bold;
`

const Home = () => {
  return (
    <div>
      <Section>
        <H1 margin>
          Hi!
          <br css={br} /> I'm Takuya Hirata
        </H1>
        <span css={span}>
          SOFTWARE ENGINEER,
          <br css={br} /> LIFELONG LEARNER
        </span>
        <P>
          Hi! Thank you for visiting my playground/portfolio site.
          <br />
          Feel free to check{' '}
          <a css={a} href="https://github.com/Takuya-H23">
            my code
          </a>{' '}
          and{' '}
          <a css={a} href="mailto:takuyahirata4@gmail.com">
            contact
          </a>{' '}
          me if your are interested!
        </P>
      </Section>

      <Testimonial />
    </div>
  )
}

export default Home
