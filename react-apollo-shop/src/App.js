import './App.css';
//! No longer use Switch | Instead use Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './components/Settings';

//* Pages
import Landing from './pages/Landing';
import Register from './components/Register';

//* Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>

        <Route path='/' exact element={< Landing /> }/>
        <Route path='/settings' exact element={< Settings /> }/>
        {/* Temporary route */}
        <Route path='/register' exact element={< Register /> }/>

      </Routes>
    </Router>

  );
}

export default App;
