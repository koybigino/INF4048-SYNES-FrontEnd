import React from "react";
import DroitList from "../../../../components/droitlist/DroitList";
import Container from "../../../../components/container/Container";

function Droit() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <DroitList />
      </div>
    </Container>
  );
}

export default Droit;
