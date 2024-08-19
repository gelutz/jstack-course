import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from "./styles";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

export default function Home() {
  const [order, setOrder] = useState("asc");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${order}`)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, [order]);

  const handleReorder = (e) => {
    e.preventDefault();
    setOrder(order === "asc" ? "desc" : "asc");
  };

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <h3>
          {`${contacts.length} contato${contacts.length == 1 ? "" : "s"}`}
        </h3>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader order={order}>
        <button type="button" onClick={handleReorder}>
          <span>Nome</span>
          <img src={arrow} alt="arrow" />
        </button>
      </ListHeader>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
