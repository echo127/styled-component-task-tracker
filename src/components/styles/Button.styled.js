import styled from 'styled-components'

export const StyledButton = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
  }
`

export const StyledButtonBlock = styled(StyledButton)`
  display: block;
  width: 100%;
`