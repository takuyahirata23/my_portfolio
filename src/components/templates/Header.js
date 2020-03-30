/** @jsx jsx */
import { useState } from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { mqs, colors } from '../emotion-variables'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Logo } from '../atoms'

const HeaderS = styled.header`
  background-color: ${colors.primary};
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HamburgerMenuWrapper = styled.div`
  cursor: pointer;

  ${mqs.md} {
    display: none;
  }
`
const hamburgerMenuIcon = css`
  color: ${colors.white};
  font-size: 2.3rem;
`

const UlS = styled.ul`
  position: fixed;
  padding-top: 2rem;
  top: 5.2rem;
  bottom: 30%;
  right: -60%;
  width: 60%;
  background-color: ${colors.white};
  z-index: 100;
  border: 2px solid ${colors.primary};
  transition: transform 0.4s ease-out;
  text-align: center;
  transform: ${props =>
    props.showMobileNav ? 'translateX(-100%)' : 'translate(0)'};

  ${mqs.md} {
    background-color: transparent;
    border: transparent;
    display: flex;
    padding-top: 0;
    position: static;
  }
`

const LiS = styled.li`
  margin-bottom: 2rem;
  ${mqs.md} {
    margin-bottom: 0;
    margin-left: 2rem;
  }

  a {
    color: ${colors.primary};
    padding: 0.5rem 1.5rem;
    ${mqs.md} {
      color: ${colors.white};
    }
  }
`

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <HeaderS>
      <Logo />
      <nav>
        <HamburgerMenuWrapper onClick={() => setShowMobileNav(!showMobileNav)}>
          {showMobileNav ? (
            <FaTimes css={hamburgerMenuIcon} />
          ) : (
            <FaBars css={hamburgerMenuIcon} />
          )}
        </HamburgerMenuWrapper>
        <UlS showMobileNav={showMobileNav}>
          <LiS onClick={() => setShowMobileNav(false)}>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </LiS>
          <LiS onClick={() => setShowMobileNav(false)}>
            <NavLink to="/work">WORK</NavLink>
          </LiS>
          <LiS onClick={() => setShowMobileNav(false)}>
            <NavLink to="/profile">PROFILE</NavLink>
          </LiS>
        </UlS>
      </nav>
    </HeaderS>
  )
}

export default Header
