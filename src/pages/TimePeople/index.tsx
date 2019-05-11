import React, { useState } from 'react'
import Heading from '../../components/Heading'
import moment, { Moment } from 'moment'

// @ts-ignore
import { DatetimePicker } from 'rc-datetime-picker'
import 'rc-datetime-picker/dist/picker.min.css'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import { AnimatedValue, animated } from 'react-spring'

const pagess = Array(10)
  .fill(0)
  .map((_, index) => {
    return ({ style }: AnimatedValue<any>) => (
      <StyledPage style={{ ...style }}>{index + 1}</StyledPage>
    )
  })

const TimePeople = () => {
  const [time, setTime] = useState(moment())
  return (
    <>
      <Heading>Pick time and number of people</Heading>
      <Wrapper>
        <SectionLeft>
          <strong>Time</strong>
          <p>{time.format('LLL')}</p>
          <DatetimePicker
            className="datetime-custom"
            moment={time}
            onChange={(time: Moment) => setTime(time)}
          />
        </SectionLeft>
        <SectionRight>
          <PeopleWrapper>
            <h3>Number of people</h3>
            <Carousel pages={pagess} />
          </PeopleWrapper>
        </SectionRight>
      </Wrapper>
    </>
  )
}

export default TimePeople

const Wrapper = styled.div`
  padding: 40px 0px;
  display: flex;
`

const SectionLeft = styled.div``
const SectionRight = styled.div`
  margin-left: 100px;
`
const PeopleWrapper = styled.div`
  width: 400px;
  height: 300px;
`

const StyledPage = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
`
