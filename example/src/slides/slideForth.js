import React from "react";

import {
  Heading, List, ListItem, Appear, Text
} from "../../../src";

export default class SlideForth extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps textColor="black">
          Components
        </Heading>
        <List>
          <ListItem>The core building blocks of React application.</ListItem>
          <ListItem>Components are interactive, reusable and stageful too.</ListItem>
          <ListItem>In Reactjs whole application is need to be break into the component only.</ListItem>
        </List>
      </div>
    );
  }
}
