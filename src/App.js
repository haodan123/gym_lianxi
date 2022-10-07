
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import  './app.css'
import Navbar from './componens/Navbar'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer  from './componens/Footer';

function App() {

  return (
   <Box width={'400px'} sx={{width:{xl:'1488px'}}} m="auto">
    {/* 顶部 */}
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
    </Routes>
    {/* 脚部 */}
    <Footer/>
   </Box>
  );
}

export default App;
