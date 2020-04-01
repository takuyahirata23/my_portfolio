import { addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'
import './../src/stories/global.css'

addDecorator(StoryRouter())
addDecorator(withKnobs)
