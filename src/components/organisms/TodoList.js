/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { mqs } from './../emotion-variables'
import { Todo } from './../melecules'
import { IoIosCode, IoIosBook, IoMdPeople, IoMdLaptop } from 'react-icons/io'

function list(image, title, text) {
  return { image, title, text }
}

const img = css`
  width: 5rem;
  height: 5rem;
`

const contents = [
  list(
    <IoIosCode css={img} />,
    'CODE',
    'Write clean, understandable, and maintainable code. Good applications need to be well organized and tested.'
  ),
  list(
    <IoMdLaptop css={img} />,
    'PRACTICE',
    'Practice what I learned, try new things to improve my skills.'
  ),
  list(
    <IoIosBook css={img} />,
    'LEARN',
    'Stay up-to-date to build great applications. Never stop learning!'
  ),
  list(
    <IoMdPeople css={img} />,
    'COMMUNICATE',
    "Communicate with team and clients. Talk to other developers by attending meetups. It's helpful and fun!"
  )
]

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  ${mqs.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`

const TodoList = () => {
  return (
    <Grid>
      {contents.map((content, index) => (
        <Todo key={`todo-${index}`} title={content.title} text={content.text}>
          {content.image}
        </Todo>
      ))}
    </Grid>
  )
}

export default TodoList
