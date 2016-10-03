import React from "react";

import {
  Heading, List, ListItem, Appear, Text
} from "../../../src";

export default class SlideFifth extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps textColor="black">
          Components
        </Heading>
        <List>
          <ListItem>Components are the building blocks of React.</ListItem>
          <ListItem>Very similar to Directives in Angular JS</ListItem>
          <ListItem>You can think of a component as a collection of  HTML, CSS, JS</ListItem>
          <ListItem>Components can be written in  pure Javascript or JSX</ListItem>
        </List>
      </div>
    );
  }
}
