import React from "react";
import { Header, Segment } from "semantic-ui-react";

const MainHeader = () => {
  return (
    <Segment textAlign="center" inverted color="black" className="segment">
      <Header as="h1">My Video Games</Header>
      <Header as="h2">List of played games</Header>
    </Segment>
  );
};

export default MainHeader;
