import React from "react";
import SanctionList from "../../../../components/sanctionlist/SanctionList";
import Container from "../../../../components/container/Container";

function Sanction() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <SanctionList />
      </div>
    </Container>
  );
}

export default Sanction;
