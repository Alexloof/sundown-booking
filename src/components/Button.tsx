import styled from 'styled-components'

export default styled.button`
  min-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: 0;
  border-radius: 7px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  width: 240px;
  transition: 0.25s background ease;
  position: relative;
  &:focus,
  &:active {
    outline: 0;
  }
  &:hover {
    background: ${props => props.theme.colors.primary}cc;
    svg {
      opacity: 1;
      left: 70%;
      height: 25px;
    }
  }
  svg {
    height: 15px;
    position: absolute;
    transition: 0.2s all ease;
    opacity: 0;
    left: 60%;
  }
`
