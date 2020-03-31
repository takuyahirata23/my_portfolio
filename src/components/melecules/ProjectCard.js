/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { colors } from './../emotion-variables'

const flex = css`
  background-color: ${colors.primary};
  border: 1px solid ${colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px;
`

const outer = css`
  height: 20rem;
`

const inner = css`
  width: 88%;
  height: 92%;
`

const span = css`
  text-align: center;
  padding: 0 0.5rem;
`

const ProjectCard = ({ name }) => {
  const url = name.replace(' ', '-').toLowerCase()
  return (
    <div>
      <Link to={`/work/${url}`}>
        <div css={[flex, outer]}>
          <div css={[flex, inner]}>
            <span css={span}>{name}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

ProjectCard.propTypes = {
  projectURL: PropTypes.string.isRequired
}

export default ProjectCard
