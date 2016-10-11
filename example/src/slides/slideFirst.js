import React from "react";

import {
  Heading, List, ListItem, Appear, Markdown
} from "../../../src";

export default class SlideFirst extends React.Component {
  render() {
    return (
      <div>
        <Heading size={2} caps textColor="black">
          What is React?
        </Heading>
        <List>
          <ListItem>A Javascript library for creating user interfaces</ListItem>
          <ListItem><Markdown>Used for handling view layer (M**V**C) for web and mobile apps</Markdown></ListItem>
          <ListItem><Markdown>Allows us to create reusable UI **components** which present data that changes over time</Markdown></ListItem>
          <ListItem>It implements one way data flow which makes it easy to reason about your app</ListItem>
          <ListItem>React can also render on the server using Node</ListItem>
          <ListItem><Markdown>It uses the concept of **virtual DOM**</Markdown></ListItem>
        </List>
      </div>
    );
  }
}
