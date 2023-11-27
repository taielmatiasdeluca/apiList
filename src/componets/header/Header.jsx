import './header.css';
import { Link } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';
import { useEffect,useState } from 'react';
import { useFetch } from '../hooks/useFetch';
function Header() {
    const [searcher,setSeacher] = useState('');
    const [focus,setFocus] = useState(false);


    let timeout;
    

    let url = `https://api.taieldeluca.com.ar/api/apis/consultar/${searcher}`;


    const {data} = useFetch(url);

    


    async function handleSearcher(event){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          const value = event.target.value;
          setSeacher(value);
          clearTimeout(timeout);
        },80);
      
    }

    return (
      <header>
        <div className="title">
        <span className="material-icons">
          cloud
        </span>
          Api
        </div>

        <div className="links">
          <WavyLink to="/" className='link' color="#161925"><span className="material-icons">
                home
              </span></WavyLink>
          <div className="searcher">
            <div className="search_container">
              <input type="text" onFocus={()=>setFocus(true)} onBlur={()=>{setTimeout(()=>{setFocus(false)},100)}} onChange={handleSearcher} /> 
            </div>
            {
                focus && (
                  <div id="header_list">
                    {data?.map(api=>{
                      return <WavyLink key={api.nombre} to={api.nombre} color="#161925"> {api.nombre} </WavyLink>
                    })}

                  </div>
                )
              }
              

          </div>
        </div>
      </header>
    );
  }
  
export default Header;
  