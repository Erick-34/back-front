import React, { useState } from "react";
import { Container, Input, Button } from "./styled";
import { useHistory } from "react-router-dom";

import { createProduct } from "../../request/product";

function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const path = useHistory();

  async function handleSubmit() {
    await createProduct(name, description);
    path.push("/");
  }

  return (
    <Container>
      <h3>Nome do produto: {name}</h3>
      <h3>Descrição do produto: {description}</h3>
      <Input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <Input
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
      <Button onClick={handleSubmit}>Criar</Button>
    </Container>
  );
}

export default CreateProduct;
