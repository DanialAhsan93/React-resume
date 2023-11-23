import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Template from './components/template/Template';
import Contactus from './components/contact/Contactus';
import Login from './components/login/Login';
import CVvisitpage from './components/CVvisitpage/CVvisitpage';
import Signup from './components/signup/Signup';
import CVcreatepage from './components/CVvisitpage/CVcreatepage';
import Mainediting from './components/Screens/Main-edit/Mainediting';
import Firsttempedu from './components/Screens/Resumetemplate/First-temp/Firsttempedu';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/template' element={<Template />}/>
      <Route path='/contact' element={<Contactus />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/CV' element={<CVvisitpage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/create' element={<CVcreatepage />} />
      <Route path='/edit' element={<Mainediting />} />
      <Route path='/edutemp' element={<Firsttempedu />} />

    </Routes>
    </>
  );
}

export default App;
