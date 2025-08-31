import { useState ,Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Darkmode has been enable', "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('lightmode has been enable', "success")
    }
  }



  return (
    <>
      <Router>
        <Navbar title="TextUtils" AboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
