import Formulario from "./componentes/Formulario";
import { useEffect } from "react";

function App() {
  useEffect(() => {consultaApi()}, []);
const consultaApi = async ()=>{
const respuestaApi= await fetch("https://newsdata.io/api/1/latest?apikey=pub_53787c366b1325ce0510477ff1fcc77bc1e31&category=politics&country=bd")
const datos= await respuestaApi.json()
console.log(datos)
}
  return (
    <main className="container mt-3">
      <h1 className="text-center text-primary mb-3">Noticias</h1>
      <Formulario></Formulario>
    </main>
  );
}

export default App;
