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
  &:focus,
  &:active {
    outline: 0;
  }
  &:hover {
    background: ${props => props.theme.colors.primary}cc;
  }
`
