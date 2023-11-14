import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { WavyContainer } from "react-wavy-transitions";


/*Main css and variables */
import '../../css/main.css';
import '../../css/variables.css';


/*  Componentes de la web */
import Landing from "../landing/Landing";
import NotFound from "../NotFound/NotFound";
import Api from "../api/Api";
import Loader from "../Loader/Loader";


let loaded = false;

function Content() {
    const [showText, setShowText] = useState(true);
    window.addEventListener('load',()=>{setShowText(!showText)});
    const location = useLocation();

      
    return (
        <>
        {showText && <Loader/>}
        <WavyContainer/>
        <Routes  location={location} key={location.pathname} >
            
            <Route exact  path="" element={<Landing />} />
            <Route  path="/*" element={<Api apiName={location} />} />
            <Route  path="*" element={<NotFound />} />

        </Routes>
            
       
     
            
        </>
    );
  }
  
export default Content;
  
 