/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { useEffect, useContext } from 'react'
import { ProjectContext } from './../../context/projects/ProjectContext'
import { Link, useParams } from 'react-router-dom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import NotFound from './NotFound'
import { Section, H1, H3, P, Grid } from './../atoms'
import { colors, mqs, space } from './../emotion-variables'

const Details = () => {
  const { filteredProjects, isLoading } = useContext(ProjectContext)
  const { project: param } = useParams()

  const currentProjectIndex = filteredProjects.findIndex(
    project => project.name === param.replace(/-/g, ' ').toUpperCase()
  )

  const currentProject = filteredProjects[currentProjectIndex]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading || !currentProject) return <div>Loading...</div>
  // make sure the project exists
  if (currentProject === -1) {
    return <NotFound />
  }
  return (
    <Section>
      <H1 secondary margin>
        {currentProject.name}
      </H1>
      <P margin>{currentProject.date}</P>
      <ContentWrapper>
        <a
          css={{ marginRight: '1.5rem' }}
          href={currentProject.links.git}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span css={linkText}>REPOSITORY</span>
          <FaArrowAltCircleRight css={arrow} />
        </a>

        {currentProject.links.project ? (
          <a
            href={currentProject.links.project}
            target="_blank"
            rel="noopener        noreferrer"
          >
            <span css={linkText}>PROJECT</span>
            <FaArrowAltCircleRight css={arrow} />
          </a>
        ) : null}
      </ContentWrapper>

      <Grid css={grid}>
        <div>
          <H3 tertiary margin>
            OVERVIEW
          </H3>
          <P>{currentProject.overview}</P>
        </div>

        <div>
          <H3 tertiary margin>
            OBJECTIVE
          </H3>
          <P>{currentProject.objective}</P>
        </div>

        <div>
          <H3 tertiary margin>
            TOOLS
          </H3>
          <ul css={gridUl}>
            {currentProject.tools.map(tool =>
              tool === 'Database' ? null : <li key={tool}>-{tool}</li>
            )}
          </ul>
        </div>
      </Grid>

      <div>
        <Link to="/work">
          <FaArrowAltCircleLeft css={[arrow, back]} />
          <span css={linkText}>Back</span>
        </Link>
      </div>
    </Section>
  )
}

const linkText = css`
  color: ${colors.primary};
  vertical-align: middle;
  margin-right: 0.8rem;
`

const back = css`
  margin-right: 1rem;
`

const arrow = css`
  color: ${colors.primary};
  vertical-align: middle;
`

const ContentWrapper = styled.div`
  margin-bottom: 4rem;
`

const grid = css`
  row-gap: 3rem;
  grid-template-columns: 1fr;
  margin-bottom: ${space.margin.dividerXs};
  ${mqs.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0 5rem;
  }
`

const gridUl = css`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, 15rem);
`
export default Details
