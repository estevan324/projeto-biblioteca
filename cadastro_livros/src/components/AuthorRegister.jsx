import { useState } from "react";

import { Form, Card, Button } from "react-bootstrap";

function AuthorRegister(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const saveAuthor = () => {
    props.addAuthor(name, gender, birthDate);
  };

  return (
    <>
      <Card
        style={({ maxWidth: "60%" }, { minHeight: "20%" })}
        className="mt-3"
      >
        <Card.Body>
          <Card.Title>Autor</Card.Title>
          <Form.Group className="mb-3">
            <Form.Label>Nome do autor</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gênero</Form.Label>
            <Form.Select onChange={(e) => setGender(e.target.value)}>
              <option value={null} selected disabled>
                Selecione o sexo
              </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="não identificado">Não identificado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              variant="success"
              size="lg"
              className="mt-3"
              onClick={saveAuthor}
            >
              Salvar autor
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default AuthorRegister;
