import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Person from './pages/Person';
import TopHome from './pages/TopHome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopHome />} />
        <Route path='/person/:name' element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
