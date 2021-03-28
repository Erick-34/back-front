import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, ProductContent, Content, View } from "./styled";

import { getProduct } from "../../request/product";

function Home() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    (async function () {
      const NewProduct = await getProduct();
      setProduct(NewProduct);
    })();
  }, []);

  return (
    <Container>
      <View>
        {products.map((product, idx) => (
          <ProductContent key={idx}>
            <Content>{product.name}</Content>
            <Content>{product.description}</Content>
          </ProductContent>
        ))}
      </View>
      <Link to="/create">Create</Link>
    </Container>
  );
}

export default Home;
