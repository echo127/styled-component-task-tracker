import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import GlobalStyle from "./components/styles/Global.styled";
import { StyledContainer } from "./components/styles/Container.styled"

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Header />
        <AddTaskForm />
        <Tasks />
      </StyledContainer>
      
    </>
  );
}

export default App;
