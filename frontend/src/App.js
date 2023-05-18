import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Profile></Profile>
      </BrowserRouter>
    </div>
  );
}

export default App;
