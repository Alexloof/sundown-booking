import React, { memo } from 'react'
import styled from 'styled-components'
import { animated, AnimatedValue } from 'react-spring'
import Carousel from '../../../../components/Carousel'

const pages = [
  ({ style }: AnimatedValue<any>) => (
    <StyledPage
      style={{ ...style }}
      src="https://www.foodbap.com/wp-content/uploads/2017/10/Pizza.jpg"
    />
  ),
  ({ style }: AnimatedValue<any>) => (
    <StyledPage
      style={{ ...style }}
      src="https://cdn.asiatatler.com/asiatatler/i/sg/2018/11/05202225-meatssticks-beef-sirloin-skewers-10_cover_1000x667.jpg"
    />
  ),
  ({ style }: AnimatedValue<any>) => (
    <StyledPage
      style={{ ...style }}
      src="https://i.ytimg.com/vi/GZ6wd190zjA/maxresdefault.jpg"
    />
  )
]

const HomeCarousel: React.FC = memo(() => {
  return (
    <Wrapper>
      <Carousel pages={pages} intervalTime={5000} autoSlide />
    </Wrapper>
  )
})

export default HomeCarousel

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const StyledPage = styled(animated.img)`
  position: absolute;
  width: 100%;
  height: 100%;
`
