/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { P, Section } from './../atoms'
import Testimonial from '../organisms/Testimonial'
import pic from './../../img/opening_animation.svg'

const message = css`
  padding: 0 2rem;
`

const Home = () => {
  return (
    <div>
      <Section>
        <object data={pic} alt="image" type="image/svg+xml">
          Image
        </object>
        <P css={message}>
          Hi! Thank you for visiting my playground/portfolio site.
          <br />
          Feel free to check <a href="https://github.com/Takuya-H23">
            my code
          </a>{' '}
          and <a href="mailto:takuyahirata4@gmail.com">contact</a> me if your
          are interested!
        </P>
      </Section>

      <Testimonial />
    </div>
  )
}

export default Home
