import React, { memo } from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {}

const OrderBox = memo(({ history }: IProps) => {
  return (
    <Wrapper>
      <h2>Start your order now!</h2>
      <Button onClick={() => history.push('/pick-dish')}>Order</Button>
    </Wrapper>
  )
})

export default withRouter(OrderBox)

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${props => `1px solid ${props.theme.colors.grey[0]}`};
  align-items: center;
`
