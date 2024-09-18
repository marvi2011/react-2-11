import Form from "react-bootstrap/Form";


const Formulario = () => {
  return (
    <section>
      <h3>Buscar por categoría</h3>
      <Form.Select aria-label="Default select example">
        <option>Opciones</option>
        <option value="1">Por idioma (castellano)</option>
        <option value="2">Por idioma (ingles)</option>
        <option value="3">Por país (Argentina)</option>
      </Form.Select>
      
      
    </section>
  );
};

export default Formulario;
