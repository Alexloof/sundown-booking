import React, { useState, useContext } from 'react'
import Heading from '../../components/Heading'
import moment, { Moment } from 'moment'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import { AnimatedValue, animated } from 'react-spring'
import Input from '../../components/Input'
import Button from '../../components/Button'
import InputLabel from '../../components/InputLabel'
import { OrderStoreContext } from '../../stores/orderStore'
import { RouteComponentProps } from 'react-router'
import queryString from 'query-string'
import validateTime from '../../utils/validateTime'
import { observer } from 'mobx-react-lite'
import { toast } from 'react-toastify'

// @ts-ignore
import { DatetimePicker } from 'rc-datetime-picker'
import 'rc-datetime-picker/dist/picker.min.css'

// generates "nbr of people" pages for the carousel
const pages = Array(10)
  .fill(0)
  .map((_, index) => {
    return ({ style }: AnimatedValue<any>) => (
      <StyledPage style={{ ...style }}>{index + 1}</StyledPage>
    )
  })

interface IProps extends RouteComponentProps {}

const TimePeople = observer(({ history, location }: IProps) => {
  const { update } = queryString.parse(location.search)
  const orderStore = useContext(OrderStoreContext)

  const [email, setEmail] = useState(orderStore.email || '')
  const [time, setTime] = useState(
    orderStore.time ? moment(orderStore.time) : moment()
  )

  const onNewNumberOfPeople = (index: number) => {
    orderStore.setPeople(index + 1)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isTimeValid = validateTime(time)

    if (isTimeValid) {
      orderStore.setTime(time)
      orderStore.setEmail(email)
      orderStore.saveOrder()
      history.push('/receipt')
    } else {
      toast(
        'Sundown is open from 16:00 - 23:00 during weekdays. Pick another time 😊',
        {
          type: toast.TYPE.ERROR
        }
      )
    }
  }

  return (
    <>
      <Heading>Pick time and number of people</Heading>
      <Wrapper>
        <div>
          <SubHeading>Time</SubHeading>
          <TimeLabel>{time.format('LLL')}</TimeLabel>
          <DatetimePicker
            className="datetime-custom"
            moment={time}
            onChange={(time: Moment) => setTime(time)}
          />
        </div>
        <SectionRight>
          <PeopleWrapper>
            <SubHeading>Number of people</SubHeading>
            <Carousel
              pages={pages}
              onNewActiveIndex={onNewNumberOfPeople}
              withButtons
              startIndex={orderStore.nbrOfPeople - 1}
            />
          </PeopleWrapper>
          <form onSubmit={handleSubmit}>
            <InputLabel>Email</InputLabel>
            <Input
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              type="email"
              required
              placeholder="Enter an email for your order..."
            />
            <Button style={{ marginTop: '40px' }}>
              {update ? 'Update order' : 'Order'}
            </Button>
          </form>
        </SectionRight>
      </Wrapper>
    </>
  )
})

export default TimePeople

const Wrapper = styled.div`
  padding: 40px 0px;
  display: flex;
`

const SubHeading = styled.h3`
  margin-bottom: 30px;
`

const TimeLabel = styled.p`
  margin-bottom: 15px;
`

const SectionRight = styled.div`
  margin-left: 20%;
`

const PeopleWrapper = styled.div`
  width: 240px;
  height: 100px;
  margin-bottom: 150px;
`

const StyledPage = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: ${props => props.theme.colors.primary};
  user-select: none;
`
