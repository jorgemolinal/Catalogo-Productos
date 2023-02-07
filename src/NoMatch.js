import {Link} from "react-router-dom";

export default function NoMatch(props){
  return <div>
    <div id="info">Ruta no encontrada</div>  
    <Link to="/"><button id="volver">VOLVER</button></Link>  

    </div>
}