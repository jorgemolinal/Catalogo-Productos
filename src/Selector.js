import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Selector(props){

    let arrayCategorias = []
    const categorias = () => { 
        props.listaCategorias.map((item,index) => {
            if(arrayCategorias.find(element => element === item.category) === undefined)
                arrayCategorias.push(item.category)
        })
        return (
            arrayCategorias.map((item,index) => (
                <option value="index">{item}</option>
            ))
        )
    }

    return (  
        <Form.Select id="selector" size='sm'>
            <option>All</option>
            {categorias()}
        </Form.Select>)
}