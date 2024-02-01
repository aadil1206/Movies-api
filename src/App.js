import logo from './logo.svg';
import './App.css';

import { HashRouter as Router } from "react-router-dom";
import Main from './Main'

function App() {
  return (
  <>
    {/* <Screen1/> */}
    <Router>
  <Main/></Router>
  </>
  );
}

export default App;
