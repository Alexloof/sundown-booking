import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useTransition } from 'react-spring'

interface IProps {
  pages: any[]
  intervalTime?: number
  autoSlide?: boolean
}

const Carousel = ({ pages, intervalTime = 4000, autoSlide }: IProps) => {
  const [index, set] = useState(0)

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        onClick()
      }, intervalTime)
      return () => {
        clearInterval(interval)
      }
    }
  }, [])

  const onClick = useCallback(
    () => set(state => (state + 1) % pages.length),
    []
  )

  const transitions = useTransition(index, p => p, {
    from: { opacity: -1, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: -1, transform: 'translate3d(-100%,0,0)' }
  })

  return (
    <Wrapper>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
      <LeftIcon>{'<'}</LeftIcon>
      <RightIcon onClick={onClick}>{'>'}</RightIcon>
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

const LeftIcon = styled.div`
  position: absolute;
  cursor: pointer;
  left: 0;
  font-size: 50px;
  top: calc(50% - 30px);
`

const RightIcon = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  font-size: 50px;
  top: calc(50% - 30px);
`
