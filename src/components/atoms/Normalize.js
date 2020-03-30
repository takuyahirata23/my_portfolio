import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { colors } from './../emotion-variables'

const Normalize = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        * {
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
        }

        body {
          font-size: 1.6rem;
          font-family: montserrat;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        a {
          text-decoration: none;
          border: 1.8px solid transparent;
          color: ${colors.secondary};
        }

        p {
          margin: 0;
          padding: 0;
        }

        a.active {
          border: 1.8px solid ${colors.primary};
          @media (min-width: 786px) {
            border: 1.8px solid ${colors.secondary};
          }
        }
      `}
    />
  )
}

export default Normalize
