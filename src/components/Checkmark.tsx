import React, { memo } from 'react'
import styled from 'styled-components'
import { Stroke, Scale } from '../styles/keyframes'

const Checkmark = memo(() => {
  return (
    <div>
      <StyledSvg
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="75" cy="75" r="50" fill="#5DC0F7" />
        <Path d="M50 85L70 100L100 50" stroke="#7ac142" stroke-width="6" />
      </StyledSvg>
    </div>
  )
})

export default Checkmark

const StyledSvg = styled.svg`
  width: 220px;
  height: 220px;
  animation: ${Scale} 0.4s ease-in-out 0.6s both;
`

const Circle = styled.circle`
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  stroke-width: 6;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: ${Stroke} 1.5s ease forwards;
  animation-delay: 0.5s;
`

const Path = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: ${Stroke} 1.2s ease-in 1.2s forwards;
  stroke-width: 4px;
`
