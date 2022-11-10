import { useState } from "react";

import { Form } from "react-bootstrap";

function BookRegister(props) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  const [authors, setAuthors] = useState("");

  props.addBook(authors, title, subtitle, date);

  return (
    <>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Título do livro</Form.Label>
        <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="subtitle">
        <Form.Label>Subtítulo do livro</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Data de publicação</Form.Label>
        <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="totalAuthors">
        <Form.Label>Quantos autores o livro possui?</Form.Label>
        <Form.Control
          type="number"
          defaultValue={0}
          onChange={(e) => setAuthors(e.target.value)}
        />
      </Form.Group>
    </>
  );
}

export default BookRegister;
