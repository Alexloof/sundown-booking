import React, { memo } from 'react'
import styled from 'styled-components'

const ContentBox = memo(() => {
  return (
    <Wrapper>
      <h2>We love making tasty food</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa expedita
        ducimus placeat corrupti suscipit, tempora odit officiis delectus.
        Molestiae voluptatibus corrupti voluptatum deserunt doloribus placeat
        molestias. Dignissimos ipsam perferendis accusamus.
      </p>
    </Wrapper>
  )
})

export default ContentBox

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${props => `1px solid ${props.theme.colors.grey[0]}`};
`
