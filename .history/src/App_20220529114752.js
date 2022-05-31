import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Title from './component/Title';
import AddRoom from './component/AddRoom';
import MyHome from './classes/Home';
import Room from './component/Room';
 

function App() {
  const home = new MyHome();

  return (
    <div className="App">
      
      <Title/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home home={home}/>} />
          <Route path='/addroom' element={<AddRoom home={home}/>} />
          <Route path='/:roomNameParam' element={<Room home={home}/>} />


        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;




