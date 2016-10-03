import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideFirst extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit caps textColor="black">
          What is React?
        </Heading>
        <List>
          <ListItem>It is a library for creating user interfaces</ListItem>
          <ListItem>Most people think it is a framework  but it is library.</ListItem>
          <ListItem>Reactjs is created by the Facebook for the V of MVC by reusable and interactive UI components.</ListItem>
        </List>
      </div>
    );
  }
}
