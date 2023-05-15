// import About from './About';
import './App.css';
import Textform from './Textform';
 
import './bootstrap.css';
import Navbar from './components/Navbar';
import React from "react";
// import {
//     Route,
//    Routes
// } from "react-router-dom";


function App() {
  return (
    <>
 
 <Navbar title="Text utils " abouttext="about" />  
 <Textform/>
 {/* <div> 
<Routes>

<Route path='/Textform' element = {<Textform/>}>
 
</Route>

<Route path='/About' element = {<About/>}>
  
</Route>

    </Routes>
     </div> */}
   </>
  );
}

export default App;
