import Formulario from "./componentes/Formulario";
import { useEffect, useState } from "react";
import ListaNoticia from "./componentes/ListaNoticia";

function App() {
  const [noticiaDeApi, setNoticiaDeApi] = useState({});

  useEffect(() => {
    consultaApi();
  }, []);
  const consultaApi = async () => {
    const respuestaApi = await fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_53787c366b1325ce0510477ff1fcc77bc1e31&category=politics&country=bd"
    );
    const datos = await respuestaApi.json();
    console.log(datos.results[0]);
    setNoticiaDeApi(datos.results[0])
  };
  return (
    <main className="container mt-3">
      <h1 className="text-center text-primary mb-3">Noticias</h1>
      <Formulario></Formulario>
      <ListaNoticia noticiaDeApi={noticiaDeApi}></ListaNoticia>
    </main>
  );
}

export default App;
