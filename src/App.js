import './App.css';
import { Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box'

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Excercisedetails from './Pages/Excercisedetails';

function App() {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/excercise/:id' element={<Excercisedetails/>}/>
      </Routes>
    </Box>
  );
}

export default App;
