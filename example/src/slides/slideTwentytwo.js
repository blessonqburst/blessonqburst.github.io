import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideTwentytwo extends React.Component {
  render() {
    return (<div>
        <Heading size={1} caps textColor="black" textFont="primary">
          Flux
        </Heading>
        <List>
          <ListItem>Flux is the application architecture that Facebook uses for building client-side web applications.</ListItem>
          <ListItem>Making data changes easy.</ListItem>
          <ListItem>Removing the burden of having a component manage its own state.</ListItem>
          <ListItem>Unidirectional data flow.</ListItem>
          <ListItem>Flux applications have three major parts: the dispatcher, the stores, and the views.</ListItem>
        </List>
      </div>
    );
  }
}
