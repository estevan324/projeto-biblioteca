import { useState } from "react";
import Axios from "axios";

import "./Home.css";

import AuthorRegister from "../components/AuthorRegister";
import BookRegister from "../components/BookRegister";

import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

import BookImage from "../assets/books.png";

function Home(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [authors, setAuthors] = useState();

  const [authorList, setAuthorList] = useState([]);

  const addBook = (authors, title, subtitle, date) => {
    setAuthors(authors);
    setTitle(title);
    setSubtitle(subtitle);
    setDate(date);
  };

  const addAuthor = (name, gender, date) => {
    setAuthorList([
      ...authorList,
      {
        name: name,
        gender: gender,
        date: date,
      },
    ]);
  };

  const handleClickRegister = () => {
    Axios.post("http://localhost:3001/books", {
      title: title,
      publicationDate: date,
      subtitle: subtitle,
      Authors: authorList,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <h2 className="m-auto" style={{ textAlign: "center" }}>
          Cadastro de Livros
        </h2>
        <Row style={{ marginTop: "30px" }}>
          <Col className="image-place">
            <img src={BookImage} className="book-image" alt="book" />
          </Col>
          <Col className="register">
            <BookRegister addBook={addBook} />
            <Row>
              {Array.from({ length: authors }).map((_, index) => (
                <Col key={index} className="cards">
                  <AuthorRegister addAuthor={addAuthor} />
                </Col>
              ))}
            </Row>
            <div className="d-grid gap-2">
              <Button
                style={{ backgroundColor: "#fca311" }}
                size="lg"
                className="mt-3"
                onClick={handleClickRegister}
              >
                Cadastrar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
