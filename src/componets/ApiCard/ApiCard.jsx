import { WavyLink } from "react-wavy-transitions";
import './apiCard.css';

function ApiCard(props) {
    return ( 
        <WavyLink to={props.nombre} color="#161925">
            <div className="name">{props.nombre}</div>
            <p className="description">
                {props.descripcion}
            </p>
            <div className="date">{props.add_date}</div>
        </WavyLink>
    )
}
export default ApiCard;
