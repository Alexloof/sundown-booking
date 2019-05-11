import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'

const FindOrder = () => {
  return (
    <Wrapper>
      <h2>Find your order</h2>
      <form>
        <Input
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
  /* align-items: center; */
`
