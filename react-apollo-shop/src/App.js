import './App.css';
//! No longer use Switch | Instead use Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './components/Settings';

//* Pages
import Landing from './pages/Landing';

function App() {
  return (
    
    <Router>
      <Routes>

        <Route path='/' exact element={< Landing /> }/>
        <Route path='/settings' exact element={< Settings /> }/>

      </Routes>
    </Router>

  );
}

export default App;
