import { useState } from "react";
import { HashRouter, Routes , Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Main from "./Component/Frontpage/Main";
import { ParallaxProvider } from "react-scroll-parallax";

import Frontnav from "./Component/Elements/Element/Frontnav";
import Email from "./Component/Elements/Element/Email";
import Navbartwo from "./Component/Navbartwo";
import { Context } from "./Component/Context/Context";
import Join from "./Component/Join/Join";
import About from "./Component/About/About";

function App() {
  const [large, setlarge] = useState(true);
  const [color, setColor] = useState("white");
  const [tribe, settribe] = useState('')
  const [name, setName] = useState('')
  const [com, setCom] = useState('')
  const [menu, setmenu] = useState(false)
  return (
    
      <HashRouter>
      <Routes>
        <Route path="/" element={<ParallaxProvider><div className=" relative z-0 bg-white h-full cursor-default ">
          <Context.Provider
            value={{
              large,
              setlarge,
              color,
              setColor,
              settribe,
              tribe,
              com,
              setCom,
              name,
              setName,
              menu,
              setmenu
            }}
          >
  
            {large ? <Navbar /> : <Navbartwo />} <Frontnav />
          
            <Main />
            <Email />
          </Context.Provider>
        </div></ParallaxProvider>}/>
        <Route path="/join" element={<div className=" bg-swarm h-[100vh] w-full"><Join/></div>}/>
        <Route path="/about" element={<ParallaxProvider><About/></ParallaxProvider>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
