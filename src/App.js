import Cart from './Components/Layout/Cart';
import MedicineForm from './Components/Form/MedicineForm';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route  path='/medicineForm' element={ <MedicineForm />}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
