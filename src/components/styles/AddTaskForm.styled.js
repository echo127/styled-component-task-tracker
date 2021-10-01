import styled from 'styled-components'

const StyledAddTaskForm = styled.form`
margin: 0 5px 40px 5px;
.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  margin: 5px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.form-control-check label {
  flex: 6;
}

.form-control-check input {
  flex: 1;
  height: 20px;
}

`
export default StyledAddTaskForm