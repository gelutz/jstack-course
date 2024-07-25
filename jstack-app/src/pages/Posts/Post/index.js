import React from "react";

import { Container } from "./styles";
import { useParams, useLocation } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  return (
    <Container>
      <h1>Post {id}</h1>
      <p>Query Params: {queryParams.get("query")}</p>
    </Container>
  );
}
