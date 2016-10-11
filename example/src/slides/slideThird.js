import React from "react";

import {
  Heading, List, ListItem, Text
} from "../../../src";

export default class SlideThird extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps textColor="black">
          Virtual DOM
        </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Make re-rendering on every change fast.</Text>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>On every update…</Text>
        <List>
          <ListItem>React Builds a new virtual DOM subtree</ListItem>
          <ListItem>Diffs it with the old tree</ListItem>
          <ListItem>Computes the minimal set of DOM mutations and puts them in a queue</ListItem>
          <ListItem>And batch executes all updates</ListItem>
        </List>
      </div>
    );
  }
}
