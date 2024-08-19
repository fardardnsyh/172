// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
// import Button from './Button';
// let name = 'deavnsh'
// import About from './Component/About'
import { useState } from 'react';
import Navbar from './Component/Navbar';
import Textform from './Component/Textfrom';
import Alert from './Component/Alert';
import { BrowserRouter , Routes ,Route} from "react-router-dom";


// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";



export function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [main, setmain] = useState('light')

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(()=>{
      setAlert(null)
    },2000)
  };

  const toogleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode is enabled","success")
      document.title="dark mode"
      // setInterval(()=>{
      //   document.title="enable light mode"

      // },2000)
      // setInterval(()=>{
      //   document.title="its urgent enable light mode"
      // },1500)
    }



    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled","success")
    }

  };
  const set=()=>{
    if(main === 'white'){
      setmain('green')
      document.body.style.backgroundColor='green'
      showAlert("Green mode is enabled","success")
    }
    else{
      setmain('white')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
    }
  }
  const click=()=>{
    if(main==='white'){
      setmain('red')
      document.body.style.backgroundColor="red"
      showAlert("red mode is enabled","success")
    }
    else{
      setmain('white')
      document.body.style.backgroundColor="white"
      showAlert("white mode is enabled","success")
    }
  }

  const toogle=()=>{
    if( main === 'white'){
      setmain('yellow')
      document.body.style.backgroundColor='yellow'
      showAlert("yellow mode is enabled","success")
    }
    else{
      setmain('white')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
    }

  }
  return (
   
    <>
    <BrowserRouter>
   

      <Navbar title="TextUtils" abouttext="About us" home="Home" mode={mode} toogleMode={toogleMode} toogle={toogle}  click={click} set={set}/>
      <Alert alert={alert} />
      
      <div className="container">
      {/* <Textform showAlert={showAlert} heading="Enter your text below to analyze" /> */}
        <Routes> 
        <Route exact path="/about" element={About}> 
        </Route> 
      
         
           {/* <Route path="/users">
            <Users /> 
          </Route>  */}
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text below to analyze" />}>
            
            {/* {/* <Home /> */}
         </Route>
        </Routes> 
         
      

        {/* <Textform showAlert={showAlert} heading="Enter your text below to analyze" /> */}

      </div>


      {/* <About/> */}
  
   </BrowserRouter>


    </>


  );
}



export default App;
