import './Vistas.css';
import ApiCard from '../ApiCard/ApiCard';
import { useFetch } from '../hooks/useFetch';


function Vistas() {
  const {data} = useFetch("https://api.taieldeluca.com.ar/api/apis/vistas");
    

  return (
    <div className="title">
      <h1>Apis mas vistas</h1>
      <div id="listado__apis " className='api_list'>
          {data?.map((api) =>(
                <ApiCard key={api.nombre} nombre={api.nombre} descripcion={api.descripcion} vistas={api.visitas} add_date={api.add_date} />
            ))}
      </div>
    </div>
  );}
  
export default Vistas;
  