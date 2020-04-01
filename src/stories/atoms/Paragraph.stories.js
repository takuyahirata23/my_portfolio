import React from 'react'
import { P } from './../../components/atoms'
import { boolean } from '@storybook/addon-knobs'

export default {
  title: 'P',
  component: P,
  parameters: {
    componentSubtitle: 'Paragraph tag'
  }
}

export const paragraphs = () => (
  <div>
    <P margin>Primary: 'normal 1.6rem/1.5 montserrat'</P>
    <P margin secondary>
      Secondary: 'normal 1.4rem/1.3 montserrat'
    </P>
    <P secondary={boolean('secondary', false)}>
      Toggle between primary and secondary
    </P>
  </div>
)
