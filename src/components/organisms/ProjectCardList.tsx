/** @jsx jsx */
import React from 'react'
import { useContext } from 'react'
import { jsx, css } from '@emotion/core'
import { ProjectContext } from '../../context/projects/ProjectContext'
import { Grid } from '../atoms'
import { ProjectCard } from '../molecules'

const grid = css`
  grid-template-columns: repeat(auto-fit, 14rem);
  grid-gap: 1.5rem;
`

const ProjectCardList: React.FC = () => {
  const { filteredProjects } = useContext(ProjectContext)

  return (
    <Grid css={grid}>
      {filteredProjects.map(project => (
        <ProjectCard
          key={project.id}
          name={project.name}
          tools={project.tools}
        />
      ))}
    </Grid>
  )
}

export default ProjectCardList
