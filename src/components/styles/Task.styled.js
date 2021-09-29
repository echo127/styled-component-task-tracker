import styled from 'styled-components'

export const StyledTask = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &.reminder {
  border-left: 5px solid green;
  }
  h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`
