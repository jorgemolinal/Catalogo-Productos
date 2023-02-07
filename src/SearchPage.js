import './App.css';
import { useState } from "react";
import Lista from './Lista';
import Form from 'react-bootstrap/Form';


export default function SearchPage(props) {  
    const [cargarLista, setCargarLista] = useState(props.theproducts);
    const [palabraBuscar, setPalabrabuscar] = useState("");

    let arrayPintar = [];
    let arrayBuscarFiltro =[];

    //Buscar con el boton
    const buscar = () => { 
        let arrayPintar = props.theproducts.filter(element => element.title.toLowerCase().trim().includes(palabraBuscar.toLowerCase().trim()) === true); 
        setCargarLista(arrayPintar);
    }
    //Para que cada categoria solo salga 1 vez
    let arrayCategorias = []
    const categorias = () => { 
        
        cargarLista.map((item,index) => {
            if(arrayCategorias.find(element => element === item.category) === undefined)
                arrayCategorias.push(item.category)
        })
        return (
            arrayCategorias.map((item,index) => (
                <option id="index">{item}</option>
            ))
        )
    }
    //Buscar que coincidan categorias
    const buscarFiltro = (param) => {
        //en este array tengo los elementos que he buscado        
        let arrayBuscarFiltro = props.theproducts.filter(element => element.category.includes(param) === true);
        if(param=="All"){
            setCargarLista(props.theproducts)
        }else{
            setCargarLista(arrayBuscarFiltro);
        }
    }

    return (<div id="productosresultados">
        <h2 id="catalogo">Catálogo</h2>
        <div id="buscadores">
            <input type="text" id="filtro" placeholder="Producto a buscar" value={palabraBuscar} onChange={e=>setPalabrabuscar(e.target.value)}></input>
            <button id="buscador" className="new" onClick={()=>buscar()}>
                    Buscar
            </button>
            <Form.Select id="selector" size='sm' onChange={e=>buscarFiltro(e.target.value)}>
                <option>All</option>
                {categorias()}
            </Form.Select>

           {/* OTRA FORMA: <label for="cars">Choose a car:</label>
            <select name="cars" id="cars"><option value="volvo">Volvo</option></select> */}
        </div>
        
    {/* Si palabraBuscar vale null no pintes nada, si vale algo distinto de null ya haces lo de despues de &&.
    Pintas el componente Resultados pasandole al componenete 2 cosas: numitems y items */}
        <Lista theproducts={cargarLista} />
        {/* esto: .filter(word => word==palabraBuscar) ESTÁ MAL. Ver cómo se hace el filter este */}
    </div>)
  }
