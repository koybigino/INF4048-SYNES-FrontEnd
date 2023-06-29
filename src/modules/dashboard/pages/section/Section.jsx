import React from "react";
import SectionList from "../../../../components/sectionlist/SectionList";
import Container from "../../../../components/container/Container";

function Section() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <SectionList />
      </div>
    </Container>
  );
}

export default Section;
