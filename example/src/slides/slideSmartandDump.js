import React from "react";

import {
  Heading, List, ListItem, Text
} from "../../../src";

export default class SlideSeventeenth extends React.Component {
  render() {
    return (<div>
        <Heading size={4} caps textColor="black" textFont="primary">
          Dumb Components
        </Heading>
        <List>
          <ListItem>Describe how things look</ListItem>
          <ListItem>Have no app dependencies</ListItem>
          <ListItem>Receive only props, providing data and callbacks</ListItem>
        </List>
        <Heading size={4} caps textColor="black" textFont="primary">
          Smart Components
        </Heading>
        <List>
          <ListItem>Describe how things work</ListItem>
          <ListItem>Provide application data, do data fetching</ListItem>
          <ListItem>Call Flux actions</ListItem>
          <ListItem>Named Container by convention</ListItem>
        </List>
      </div>
    );
  }
}
