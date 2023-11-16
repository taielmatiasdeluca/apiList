import './header.css';
import { Link } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';
import { useEffect,useState } from 'react';
import { useFetch } from '../hooks/useFetch';
function Header() {
    const [searcher,setSeacher] = useState('');
    const [focus,setFocus] = useState(false);


    let timeout;
    let delay = 0.2//SEG

    let url = `https://api.taieldeluca.com.ar/api/apis/consultar/${searcher}`;


    const {data} = useFetch(url);

    


    async function handleSearcher(event){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          const value = event.target.value;
          setSeacher(value);
          clearTimeout(timeout);
        },delay*1000);
      
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
          <WavyLink to="/" className='link' color="#161925"><span class="material-icons">
                home
              </span></WavyLink>
          <div className="searcher">
            <div className="search_container">
              <span class="material-icons">
                search
              </span>
              <input type="text" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={handleSearcher} /> 
              
            </div>
            {
                focus && (
                  <div id="header_list">
                    {data?.map(api=>{
                      console.log(api)
                      return <WavyLink to="/" color="#161925"> {api.nombre} </WavyLink>
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
  