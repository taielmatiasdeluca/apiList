import './api.css';
import { useFetch } from '../hooks/useFetch';
//Este es el nombre de la api que viene por url


function Api(props) {
    const ApiName = props.apiName.pathname.replace('/','');
    useFetch(`https://api.taieldeluca.com.ar/api/apis/visit/${ApiName}`);
    const {data} = useFetch(`https://api.taieldeluca.com.ar/api/apis/get/${ApiName}`);

    return (
        <div className='container' >
            <h1>{ApiName}</h1>
            <h3></h3>

        </div>
    );
  }
  
export default Api;
  