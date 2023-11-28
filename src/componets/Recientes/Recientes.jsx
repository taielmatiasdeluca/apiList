import './Recientes.css';
import { useFetch } from '../hooks/useFetch';
import ApiCard from '../ApiCard/ApiCard';


function Recientes() {
    const {data} = useFetch("https://api.taieldeluca.com.ar/api/apis/recent");
    

    return (
      <div className="title">
          <h1>Apis mas nuevas</h1>
          <div id="listado__apis " className='api_list'>
              { data?.map(api =>(
                    <ApiCard  nombre={api.nombre} descripcion={api.descripcion} vistas={api.visitas} add_date={api.add_date} />
                ))}
          </div>
      </div>

    );
  }
  
export default Recientes;
  