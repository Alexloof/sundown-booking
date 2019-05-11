import React, { memo } from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import styled from 'styled-components'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {}

const Navigation = memo(({ history }: IProps) => {
  return (
    <Wrapper>
      <StyledLogo
        height="60px"
        width="50px"
        onClick={() => history.push('/')}
      />
      <Header onClick={() => history.push('/')}>Sundown Booking</Header>
      <List>
        <ListItem>Restaurants</ListItem>
        <ListItem>Products</ListItem>
        <ListItem>Newsletter</ListItem>
        <ListItem>Contact</ListItem>
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
  cursor: pointer;
  padding-bottom: 10px;
`

const Header = styled.h1`
  cursor: pointer;
  padding-left: 10px;
`

const List = styled.ul`
  display: flex;
  margin-left: auto;
`

const ListItem = styled.li`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px 20px;
  font-weight: 600;
`
