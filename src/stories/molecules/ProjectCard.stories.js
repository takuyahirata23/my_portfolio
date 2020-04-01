import React from 'react'
import { ProjectCard } from './../../components/molecules'

export default {
  title: 'ProjectCard',
  component: ProjectCard
}

export const GraphQL = () => (
  <div>
    <ProjectCard
      name="GraphQL Server"
      tools={['GraphQL', 'Node', 'Database']}
    />
    <ProjectCard name="Portfolio Site" tools={['React']} />
  </div>
)
