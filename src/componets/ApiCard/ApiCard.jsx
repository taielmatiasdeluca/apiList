import { WavyLink } from "react-wavy-transitions";
import './apiCard.css';

function ApiCard(props) {

    return ( 
        <WavyLink to={props.nombre} color="#161925">
            <div className="title">
                <div className="name">{props.nombre}</div>
                <div className="vistas">
                    <span class="material-icons">
                    person
                    </span>
                    {props.vistas}
                </div>
                

            </div>
            <p className="description">
                {props.descripcion}
            </p>
            <div className="date">{props.add_date}</div>
        </WavyLink>
    )
}
export default ApiCard;
