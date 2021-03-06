import React, { useState, useContext, memo } from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import InputLabel from '../../../../components/InputLabel'
import { OrderStoreContext } from '../../../../stores/orderStore'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ArrowForward } from 'styled-icons/material/ArrowForward/ArrowForward'

interface IProps extends RouteComponentProps {}

const FindOrder = memo(({ history }: IProps) => {
  const { hydrateOrder } = useContext(OrderStoreContext)

  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const orderExist = hydrateOrder(email)
    if (orderExist) {
      history.push('/pick-dish?update=true')
    } else {
      toast('☹️ Could not find a order...', {
        type: toast.TYPE.ERROR
      })
      setEmail('')
    }
  }

  return (
    <Wrapper>
      <h2>Find your order</h2>
      <form onSubmit={handleSubmit}>
        <InputLabel>Email</InputLabel>
        <Input
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          type="email"
          required
          placeholder="Enter an email to find your order..."
          style={{ marginBottom: '20px' }}
        />
        <Button>
          Find
          <ArrowForward />
        </Button>
      </form>
    </Wrapper>
  )
})

export default withRouter(FindOrder)

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${props => `1px solid ${props.theme.colors.grey[0]}`};
`
