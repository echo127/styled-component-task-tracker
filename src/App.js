import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import GlobalStyle from "./styles/Global.styled";
import {Container} from "./styles/Container.styled"

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <AddTaskForm />
        <Tasks />
      </Container>
      
    </>
  );
}

export default App;
