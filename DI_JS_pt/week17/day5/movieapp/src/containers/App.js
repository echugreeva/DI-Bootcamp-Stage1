 import './App.css';
import { Routes, Route} from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Homepage from '../components/Homepage'
import Moviepage from '../components/Moviepage'

import {connect} from 'react-redux'

function App() {
  return (
    
    <div className="App">
      <ErrorBoundary><Header/></ErrorBoundary>
      
      <Routes>
      
        
        <Route exact path="/" element={<ErrorBoundary><Homepage/></ErrorBoundary>} />
        <Route exact path="/movie/:id" element={<ErrorBoundary><Moviepage/></ErrorBoundary>} />
        
    
      </Routes>
      <ErrorBoundary><Footer /></ErrorBoundary>
      
    </div>
   
    
  );
}

export default App;

