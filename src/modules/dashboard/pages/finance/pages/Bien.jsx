import React from "react";
import Container from "../../../../../components/container/Container";
import BienList from "../../../../../components/bienlist/BienList";

export default function Bien() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <BienList />
      </div>
    </Container>
  );
}
