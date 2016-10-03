import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideSixth extends React.Component {
  render() {
    return (<div>
        <Heading size={1} caps textColor="black">
          jsx
        </Heading>
        <List>
          <ListItem>JSX - javascript XML syntax transform. </ListItem>
          <ListItem>It helps in making our writing code easier and faster. </ListItem>
          <ListItem>JSX lets us write HTML –ish tags in our JavaScript.</ListItem>
        </List>
      </div>
    );
  }
}
