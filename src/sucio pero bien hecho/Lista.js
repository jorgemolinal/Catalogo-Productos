import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Lista(props) { 
    // console.log(props.theproducts)

    const hola = () =>{ console.log("funciona")}

    return (<div id="listaproductos">
        <ul id="items">
{/* Card ese entero es de Boostrap */}
        {props.theproducts.map((item,index) => ( 
            <li key={item.id} className="unproducto">   
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{item.title} </Card.Title>
                        <Card.Text id="textProduct" >{item.description}</Card.Text>
                        <br></br>
                        <img id="photo" src={item.images[0]}></img>
                        <br></br>
                        <Button id="botonProduct" variant="primary" onClick={hola()}>Ver</Button>
                    </Card.Body>
                </Card>              
            </li>
            
        ))}
        </ul>
    </div>)
  }
