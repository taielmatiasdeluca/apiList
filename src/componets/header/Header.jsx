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
          <WavyLink to="/" className='link' color="#161925"><span class="material-icons">
                home
              </span></WavyLink>
          <div className="searcher">
            <div className="search_container">
              <span class="material-icons">
                search
              </span>
              <input type="text" /> 
            </div>

          </div>
        </div>
      </header>
    );
  }
  
export default Header;
  