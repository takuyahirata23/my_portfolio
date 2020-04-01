/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Section, P } from '../atoms'
import Selection from '../molecules/Selection'
import { ProjectCardList } from './../organisms'

const Work = () => {
  return (
    <Section>
      <P margin>These are some projects I have developed.</P>
      <P css={{ marginBottom: '3rem' }}>
        If you are interested in my code, please click on the project link on
        any of the example pages.
      </P>
      <Selection />
      <ProjectCardList />
    </Section>
  )
}

export default Work
