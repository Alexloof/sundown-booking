import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, animated, AnimatedValue } from 'react-spring'

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

const Carousel: React.FC = () => {
  const [index, set] = useState(0)

  useEffect(() => {
    setInterval(() => {
      onClick()
    }, 8000)
  }, [])

  const onClick = useCallback(() => set(state => (state + 1) % 3), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  })

  return (
    <Wrapper onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </Wrapper>
  )
}

export default Carousel

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const StyledPage = styled(animated.img)`
  position: absolute;
  width: 100%;
  height: 100%;
`
