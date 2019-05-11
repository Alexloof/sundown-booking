import styled from 'styled-components'

export default styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: ${props => `1px solid ${props.theme.colors.grey[1]}`};
  height: 40px;
  padding: 5px 10px;
  width: 100%;
  &:focus,
  &:active {
    outline: 0;
  }
`
