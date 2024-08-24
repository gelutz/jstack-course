import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from "./styles";
import React, { useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";
import arrow from "../../assets/images/arrow.svg";
import { contactService } from "../../services/ContactService";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

export default function Home() {
  const [order, setOrder] = useState("asc");
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  );

  useEffect(() => {
    setIsLoading(true);
    // a função que é passada para o useEffect precisa ser síncrona
    // caso contrário, a função de cleanup não será executada (vai retornar uma promise)
    // para trabalhar com await dentro do use effect, é melhor criar e rodar uma função assíncrona
    contactService.fetchContacts({ order: "asc" }).then(([response, error]) => {
      if (error) {
        // mostrar um toast, algo assim
      }

      if (response) {
        setContacts(response);
      }

      setIsLoading(false);
    });

    return () => console.log("unmount"); // exemplo de função de cleanup (roda depois do unmount)
  }, [order]);

  const handleReorder = (e) => {
    e.preventDefault();
    setOrder((prevState) => (prevState === "asc" ? "desc" : "asc"));
  };

  const handleChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          value={searchTerm}
          onChange={handleChangeInput}
          type="text"
          placeholder="Pesquise pelo nome"
        />
      </InputSearchContainer>
      <Header>
        <h3>
          {`${filteredContacts.length} contato${
            filteredContacts.length == 1 ? "" : "s"
          }`}
        </h3>
        <Link to="/new">Novo Contato</Link>
      </Header>
      {filteredContacts.length !== 0 && (
        <ListHeader order={order}>
          <button type="button" onClick={handleReorder}>
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </ListHeader>
      )}
      {filteredContacts.map((contact) => (
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
