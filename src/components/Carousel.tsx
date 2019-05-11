import React, { useState, useCallback, useEffect, memo } from 'react'
import styled from 'styled-components'
import { useTransition } from 'react-spring'
import { LeftArrow } from 'styled-icons/boxicons-solid/LeftArrow'

interface IProps {
  pages: any[]
  intervalTime?: number
  autoSlide?: boolean
  withButtons?: boolean
  onNewActiveIndex?: (index: number) => void
  startIndex?: number
}

const Carousel = memo(
  ({
    pages,
    intervalTime = 4000,
    autoSlide,
    onNewActiveIndex,
    withButtons,
    startIndex
  }: IProps) => {
    const [index, set] = useState(startIndex || 0)
    const [forwards, setForwards] = useState(true)

    useEffect(() => {
      if (autoSlide) {
        const interval = setInterval(() => {
          rightClick()
        }, intervalTime)
        return () => {
          clearInterval(interval)
        }
      }
    }, [])

    useEffect(() => {
      onNewActiveIndex && onNewActiveIndex(index)
    }, [index])

    const rightClick = useCallback(() => {
      setForwards(true)
      set(state => (state + 1) % pages.length)
    }, [])

    const leftClick = useCallback(() => {
      setForwards(false)
      set(state => {
        const nextIndex = state - 1
        if (nextIndex < 0) {
          return pages.length - 1
        }
        return (state - 1) % pages.length
      })
    }, [])

    const transitions = useTransition(index, p => p, {
      initial: { opacity: 1 },
      from: {
        opacity: -1,
        transform: forwards ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)'
      },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: {
        opacity: -1,
        transform: forwards ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)'
      }
    })
    return (
      <Wrapper>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
        {withButtons && <LeftIcon onClick={leftClick} />}
        {withButtons && <RightIcon onClick={rightClick}>{'>'}</RightIcon>}
      </Wrapper>
    )
  }
)

export default Carousel

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Icon = styled(LeftArrow)`
  position: absolute;
  cursor: pointer;
  height: 60px;
  top: calc(50% - 30px);
  fill: #404040;
  z-index: 10;
`

const LeftIcon = styled(Icon)`
  left: 0;
`

const RightIcon = styled(Icon)`
  right: 0;
  transform: rotate(180deg);
`
