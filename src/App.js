import { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import SearchPage from './SearchPage';
import CONFIG from "./config/config";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mockdata } from "./constants/products";
import {Routes, Route} from "react-router"
import Vista from "./Vista";
import NoMatch from "./NoMatch";



function App() {

  const [loading, setLoading] = useState(true);
  const [myProducts, setMyproducts] = useState([]);
  const [actions, setActions] = useState([]);
  const [buscador, setBuscador] = useState("");

  const download = async () => {
		let downloadedData;
    if (CONFIG.use_server){
      try {
        const res = await fetch(CONFIG.server_url);
        downloadedData = await res.json();
      } catch (e) {
        console.log("No se ha podido descargar la información.");
      }
    } else {
      downloadedData = mockdata;
    }
		setMyproducts(downloadedData);
    //como un mensaje
		setActions([...actions, "Productos descargadas de " + CONFIG.server_url + " a las " + new Date().toLocaleTimeString()])
	}

  useEffect(() => {
    //Descargar el fichero y despues poner loading a false
    async function fetchData() {
      await download();
        setTimeout(()=>{
          setLoading(false);
        },500);		
    }

    fetchData();
  }, []);
  
  return (
    <div className="App">
     <Header />
     {/* Boolean ? si es true hace esto ? si es false hace esto :) */}
     {loading ? <Spinner id="loading" className="spinner"  animation="border" size="sm"/>  :
        <Routes> {/* LAS RUTAS EN ORDEN */}
          <Route path="/" element={<SearchPage theproducts={myProducts.products}/>}/>
          <Route path="/products/:productId" element={<Vista theproducts={myProducts.products} />} />
          <Route path="*" element ={<NoMatch/>}/>
        </Routes>
      }
    </div>
  );
}

export default App;
