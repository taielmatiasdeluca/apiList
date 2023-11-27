import './landing.css';
import { Link } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';
import ApiCard from '../ApiCard/ApiCard';
import { useFetch } from '../hooks/useFetch';




function Landing() {
  
    const {data} = useFetch("https://api.taieldeluca.com.ar/api/apis/get");
    
   

  

    return (
        <div className='content'>
            <div className="presentation">
                <h1>Bienvenido a mi listado de apis</h1>
                <h3>Hola soy <a href="http://taieldeluca.com.ar">@TaielDeLuca</a> y esta es la web en la que recopilo mis APIS, como objetivo que a todo mundo que guste usarlas
                    pueda hacerlo. 
                </h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161925" fillOpacity="1" d="M0,64L48,53.3C96,43,192,21,288,48C384,75,480,149,576,160C672,171,768,117,864,122.7C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            
            <div className="listado">
                
                
                <div className="item">
                    <h3>Apis mas Vistas <WavyLink  to="/vistas"  color="#161925">Ver Mas</WavyLink></h3>
                        
                      
                    <div className="api_list">
                        {
                            data?.vistas.map((api) =>(
                               <ApiCard key={api.nombre}  nombre={api.nombre} descripcion={api.descripcion} vistas={api.visitas} add_date={api.add_date} />
                            ))
                        }
                    </div>

                </div>

                <div className="item">
                    <h3>Apis mas Recientes <WavyLink  to="/recent"  color="#161925">Ver Mas</WavyLink></h3>
                    <div className="api_list">
                        {
                            data?.recientes.map((api) =>(
                               <ApiCard key={api.nombre} nombre={api.nombre} descripcion={api.descripcion}  vistas={api.visitas}  add_date={api.add_date} />
                            ))
                        }

                            

                    </div>

                </div>

              
            </div>

        </div>
    );
  }
  
  export default Landing;
  