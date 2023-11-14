import './api.css';
import { useFetch } from '../hooks/useFetch';
//Este es el nombre de la api que viene por url
const apiName = window.location.href.split('/')[3];




function setAll(){
  
}

function Api() {
    const {data} = useFetch(`https://api.taieldeluca.com.ar/api/apis/visit/${apiName}`);
    
    return (
        <div onLoad={setAll()}>
            <h1>{apiName}</h1>
            <h3></h3>

        </div>
    );
  }
  
export default Api;
  