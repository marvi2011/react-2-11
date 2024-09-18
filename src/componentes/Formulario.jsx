import Form from "react-bootstrap/Form";
import Noticia from "./Noticia";

const Formulario = () => {
  return (
    <section>
      <h3>Buscar por categoría</h3>
      <Form.Select aria-label="Default select example">
        <option>Opciones</option>
        <option value="1">Noticia1</option>
      </Form.Select>
      <Noticia></Noticia>
    </section>
  );
};

export default Formulario;
