import React from "react";
import Container from "../../../../../components/container/Container";
import FondList from "../../../../../components/fondlist/FondList";

export default function Fond() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <FondList />
      </div>
    </Container>
  );
}
