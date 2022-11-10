import { useState, useEffect } from "react";
import axios from "axios";
import "./Books.css";

import { Card } from "react-bootstrap";

function BookView(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const convertDate = (strDate) => {
    const convertedDate = new Date(strDate);
    return convertedDate.toLocaleDateString("pt-br");
  };

  return (
    <>
      {books.map((book, key) => {
        return (
          <Card className="bookCard">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {book.title}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ textAlign: "center" }}
              >
                {book.subtitle}
              </Card.Subtitle>
              <Card.Text>
                <h6 className="fieldsName">Data de Publicação</h6>
                <span>{convertDate(book.publicationDate)}</span>
              </Card.Text>
              <hr />
              {book.Authors.map((author, key) => {
                return (
                  <div style={{ marginBottom: "15px" }}>
                    <h5 style={{ textAlign: "center", margin: "0px" }}>
                      Autor {key + 1}
                    </h5>
                    <h6 className="fieldsName">Nome</h6>
                    <span>{author.name}</span>
                    <h6 className="fieldsName">Data Nascimento</h6>
                    <span>{convertDate(author.birthDate)}</span>
                    <h6 className="fieldsName">Gênero</h6>
                    <span>{author.gender}</span>
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default BookView;
