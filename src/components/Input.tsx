import styled from 'styled-components'

export default styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid gray;
  height: 40px;
  padding: 5px;
  width: 100%;
  &:focus,
  &:active {
    outline: 0;
  }
`
