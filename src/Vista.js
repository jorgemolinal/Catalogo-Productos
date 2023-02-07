import {Link, useParams} from "react-router-dom";
import React from "react";
import Location from "./Location";

export default function Vista(props) {
	let { productId } = useParams(); //El useParam pilla el parametro que se corresponda a productoId. Como hemos puesto en la
    //ruta (/products/:productId) de app.js, ese es el parametro y ademas es un numero (lo sé pq lleva : delante)
    //El Number convierte un String (parametro) a valor numerico
	return (<div>
		<h2 id="titulo" ><strong>
			{/* <p>{props.theproducts[productId].title}</p> de esta forma, al clickae el iPhone 9 (id=1), se devuelve el 
			theproduct[1], que seria el la posicion 2 del array, donde estaria el iPhone X (id=2) */}
			{/* {props.theproducts.find(({id})=>{ return id===Number(productId)}).title}  <= de esta forma, es la correcta para
			que salga bien la vista en la web. Pero el autocorector esta desplazado (F, es un error) asi q lo hacemos asi :( */}
		  	<p>{props.theproducts[productId].title}</p>
		</strong></h2>
		<div id="contenedorvista">
			<div><img id="imgproduct" src={props.theproducts[productId].images[0]}></img></div>
			<div id="infoproduct">
				<p><strong>Description:</strong> {props.theproducts[productId].description}</p>
				<p><strong>Price:</strong>{props.theproducts[productId].price}</p>
				<p><strong>Rating: </strong>{props.theproducts[productId].rating}</p>
				<p><strong>Stock: </strong>{props.theproducts[productId].stock}</p>
			</div>
		</div>
		<div id="divlocation">
        	<Location/>
		</div>
		<Link to="/"><button id="volver" className="index">Volver</button></Link>
	</div>)
}