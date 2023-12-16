
import React from'react';
import {BrowserRouter ,Route,Routes} from'react-router-dom';
import Comp1 from'./components/SignUp';
import Comp2 from'./components/Login';
import MyPix from './components/MyPix';
import FirstComp from "./components/FirstComp";
import SecondComp from "./components/SecondComp";
import Nabar from'./components/Nabar';
//import Fst from './components/Fst';

//import Menu from'./components/Menu';
const App =()=> {
  return (
    <BrowserRouter>
   
    <Nabar/>
   <Routes>
   <Route path="/" element={<h1>Home</h1>} />
    <Route path="/Register" element={<Comp1/>} />
     <Route path="/login"element={<Comp2/>}/>
     <Route path="/FirstComp"element={<FirstComp/>}/>
     <Route path="/SecondComp"element={<SecondComp/>}/>
     <Route path="/MyPix"element={<MyPix/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
