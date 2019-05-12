import React, { memo, useState } from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import styled from 'styled-components'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wiggle } from '../styles/keyframes'
import { useSpring, animated, config } from 'react-spring'

interface IProps extends RouteComponentProps {}

const Navigation = memo(({ history }: IProps) => {
  const [transform, setTransform] = useState(0)
  const props = useSpring({
    config: config.stiff,
    transform: `translateX(${transform}%)`
  })

  return (
    <Wrapper>
      <LogoWrapper>
        <StyledLogo onClick={() => history.push('/')} />
        <Header onClick={() => history.push('/')}>Sundown Booking</Header>
      </LogoWrapper>
      <List>
        <ListItem onMouseEnter={() => setTransform(0)}>Restaurants</ListItem>
        <ListItem onMouseEnter={() => setTransform(100)}>Products</ListItem>
        <ListItem onMouseEnter={() => setTransform(200)}>Newsletter</ListItem>
        <ListItem onMouseEnter={() => setTransform(300)}>Contact</ListItem>
        <Underline style={props} />
      </List>
    </Wrapper>
  )
})

export default withRouter(Navigation)

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 90px;
  margin-bottom: 50px;
`

const StyledLogo = styled(Logo)`
  padding-bottom: 10px;
  height: 60px;
  width: 50px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover ${StyledLogo} {
    animation: ${Wiggle} 1s ease-in-out infinite forwards;
  }
`

const Header = styled.h1`
  padding-left: 10px;
`

const Underline = styled(animated.span)`
  opacity: 0;
  transition: 0.2s opacity ease;
  position: absolute;
  width: 25%;
  height: 2px;
  left: 0;
  bottom: 5px;
  background: ${props => props.theme.colors.primary};
`

const List = styled.ul`
  display: flex;
  margin-left: auto;
  position: relative;
  width: 50%;
  height: 50px;
  align-items: center;
  &:hover ${Underline} {
    opacity: 1;
  }
`

const ListItem = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-weight: 600;
  width: 25%;
`
