import './header.css';
import { Link } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';
function Header() {
    return (
      <header>
        <div className="title">
        <span className="material-icons">
          cloud
        </span>
          Api
        </div>

        <div className="links">
          <WavyLink to="/" className='link' color="#161925">Inicio</WavyLink>
          <WavyLink to="api/pokeCapo" className='link' color="#161925">Listado</WavyLink>
        </div>
      </header>
    );
  }
  
export default Header;
  