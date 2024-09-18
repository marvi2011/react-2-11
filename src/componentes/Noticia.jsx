import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Noticia = () => {
  return (
    <section>
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Body>
          <Card.Title>Título de la noticia</Card.Title>
          <Card.Text>Cuerpo de la noticia</Card.Text>
          <Button variant="success">Ir a la noticia</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Noticia;
