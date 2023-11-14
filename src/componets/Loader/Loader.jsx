import './loader.css';
import { RotatingLines } from "react-loader-spinner";




function Loader(props) {
    return (
        <div className="loader_container">
            <RotatingLines
                strokeColor="#161925"
                strokeWidth="5"
                animationDuration="0.75"
                width="15%"
                visible={true}
            />
           
        </div>
    );
  }
  
export default Loader;
  