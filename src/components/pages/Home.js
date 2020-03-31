/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { P, Section } from './../atoms'
import { space } from './../emotion-variables'
import { Testimonial } from '../organisms'
import pic from './../../img/opening_animation.svg'

//align with testimonial cards below
const message = css`
  padding: 0 ${space.padding.sm};
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
