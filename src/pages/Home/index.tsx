import React from 'react'
import styled from 'styled-components'
import Carousel from './components/Carousel'
import OrderBox from './components/OrderBox'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Area1>
        <Carousel />
      </Area1>
      <Area2>
        <OrderBox />
      </Area2>
      <Area3 />
      <Area4 />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.main`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(12, [col] auto);
  grid-template-rows: repeat(2, [row] 400px);
`

const Area1 = styled.div`
  grid-column: col / span 8;
  grid-row: row;
`

const Area2 = styled.div`
  grid-column: col 9 / span 4;
  grid-row: row;
`

const Area3 = styled.div`
  grid-column: col / span 6;
  grid-row: row 2;
`

const Area4 = styled.div`
  grid-column: col 7 / span 6;
  grid-row: row 2;
`
