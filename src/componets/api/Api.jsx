import './api.css';
import { useFetch } from '../hooks/useFetch';
import { useEffect , useState } from 'react';
//Este es el nombre de la api que viene por url


function Api(props) {
    const ApiName = props.apiName.pathname.replace('/','');
    useFetch(`https://api.taieldeluca.com.ar/api/apis/visit/${ApiName}`);
    const {data} = useFetch(`https://api.taieldeluca.com.ar/api/apis/get/${ApiName}`);

    const [func,setDesc] = useState('');
   
      
    
    
    return (
        <div className='container' >
            {data?.error && (
                <h1>{data.error}</h1>
            )}



            {
                data?.info && (<>  
            <div className="title">
                <h1>{data?.info.nombre}</h1>
                <h3>{data?.info.descripcion}</h3>
            </div>

            <div className="description">
                
                <div id="lista__funciones"  className="function_list">
                    <h2>Api</h2>
                    {data?.funciones.map(func =>(
                        <button onClick={(e)=>{
                            
                            setDesc(func)
                            }}>
                            <span class="material-icons">
                            chevron_right
                            </span>
                            {func.funcion}
                        </button>
                    )) }
                </div>
                <div className="function_content">
                    {func && (
                        <>
                        <span className='method_container'>
                        {func?.funcion.toUpperCase()}
                        <div className="method">{func?.method.toUpperCase()}</div>
                        </span>
                        <div className="func_description">{func?.descripcion}</div>
                        <div className="url">Quieres Probarla ? <a href={func?.url}>{func?.url}</a></div>
                        </>
                    )}
                </div>
                
            </div>
            </>)}
           
        </div>
    );
  }
  
export default Api;
  