import React from "react";
import ActiviteList from "../../../../components/activitelist/ActiviteList";
import Container from "../../../../components/container/Container";

function Activity() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <ActiviteList />
      </div>
    </Container>
  );
}

export default Activity;
