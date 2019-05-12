import { keyframes } from 'styled-components'

export const Wiggle = keyframes`
  0% {transform: rotate(0deg);}
  25% {transform: rotate(-10deg);}
  50% {transform: rotate(10deg);}
  75% {transform: rotate(-5deg);}
  100% {transform: rotate(0deg);}
`

export const Stroke = keyframes` 
  100% {
    stroke-dashoffset: 0;
  }
`

export const Scale = keyframes` 
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`
