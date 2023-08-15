import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Navbar from '@/components/navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>} />
      </Routes>
    </Router>
  );
};

export default App;
