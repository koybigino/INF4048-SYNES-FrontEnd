import React from "react";
import UserList from "../../../../components/userlist/UserList";
import Container from "../../../../components/container/Container";

function User() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <UserList />
      </div>
    </Container>
  );
}

export default User;
