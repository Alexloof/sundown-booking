import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import InputLabel from '../../../../components/InputLabel'

const FindOrder = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          placeholder="Type an email address to find your order..."
          style={{ marginBottom: '20px' }}
        />
        <Button>Find</Button>
      </form>
    </Wrapper>
  )
}

export default FindOrder

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${props => `1px solid ${props.theme.colors.grey[0]}`};
`
