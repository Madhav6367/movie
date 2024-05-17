
import './App.css';
import Home from './components/Home';
import {Routes,Route } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';

function App() {
  return (
  <div>

  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="movie/:id" element={<SingleMovie />} />
  <Route path="*" element={<Error/>} />
  </Routes>
  </div>
  );
}

export default App
 