import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'


function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>      
    </>
  );
}

export default App;
