import styled, {css} from 'styled-components'

const baseButtonStyle = css`
  display: inline-block;
  background: ${({bgColor})=>bgColor};
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  &.block {
    display: block;
    width: 100%;
  }
`

export const StyledButton = styled.button`
  ${baseButtonStyle}
  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
  }
`
export const InputSubmit = styled.input.attrs({ 
  type: 'submit'
})`${baseButtonStyle}`
