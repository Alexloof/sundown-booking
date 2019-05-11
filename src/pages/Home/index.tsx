import React, { useEffect, useContext, memo } from 'react'
import styled from 'styled-components'
import HomeCarousel from './components/HomeCarousel'
import OrderBox from './components/OrderBox'
import FindOrder from './components/FindOrder'
import ContentBox from './components/ContentBox'
import { OrderStoreContext } from '../../stores/orderStore'

const Home: React.FC = memo(() => {
  const { refreshOrder } = useContext(OrderStoreContext)

  useEffect(() => {
    refreshOrder()
  }, [refreshOrder])

  return (
    <Wrapper>
      <Area1>
        <HomeCarousel />
      </Area1>
      <Area2>
        <OrderBox />
      </Area2>
      <Area3>
        <FindOrder />
      </Area3>
      <Area4>
        <ContentBox />
      </Area4>
    </Wrapper>
  )
})

export default Home

const Wrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(12, [col] 1fr);
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
