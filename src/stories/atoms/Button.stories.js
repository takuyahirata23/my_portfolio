import React from 'react'
import { Button } from './../../components/atoms'
import { boolean } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons',
  },
}

export const Buttons = () => (
  <div>
    <div style={{ display: 'flex' }}>
      <Button onClicked={() => {}}>I am a button!</Button>
      <Button disabled={boolean('disabled', true)} onClicked={() => {}}>
        I am a disabled button!
      </Button>
    </div>
    <div style={{ display: 'flex' }}>
      <Button secondary onClicked={() => {}}>
        I am a secondary button!
      </Button>
      <Button
        secondary
        disabled={boolean('disabled', true)}
        onClicked={() => {}}
      >
        I am a secondary disabled button!
      </Button>
    </div>
  </div>
)
