import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListaNoticia = ({ noticiaDeApi }) => {
  return (
    <section>
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Body>
          <Card.Title>{noticiaDeApi.title}</Card.Title>
          <Card.Text>{noticiaDeApi.description}</Card.Text>
          <Button variant="success">Ir a la noticia</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default ListaNoticia;
