import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {Link} from "react-router-dom";



export default function Lista(props) { 
    // console.log(props.theproducts)

    const hola = () =>{ console.log("funciona")}

    return (<div id="listaproductos">
        <ul id="items">
{/* Card ese entero es de Boostrap */}
        {props.theproducts.map((item,index) => ( 
            <li key={item.id} className="unproducto">   
                <Card border="light" style={{ width: '18rem' }} text="white" bg="dark">
                    <Card.Body className="cardBody">
                        <Card.Title>{item.title} </Card.Title>
                        <Card.Text id="textProduct" >{item.description}</Card.Text>
                        <br></br>
                        <img id="photo" src={item.images[0]}></img>
                        <br></br>
                        <Link to={"/products/"+item.id}>
                            <Button id="botonProduct" variant="primary">Ver</Button>
                        </Link>     
                    </Card.Body>
                </Card>              
            </li>
        ))}
        </ul>
        
    </div>
    )
  }
