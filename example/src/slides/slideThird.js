import React from "react";

import {
  Heading, List, ListItem, Appear, Text
} from "../../../src";

export default class SlideThird extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps textColor="black">
          Virtual DOM
        </Heading>
          <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold>Make re-rendering on every change fast.</Text></Appear>
          <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold>On every update…</Text></Appear>
        <List>
          <Appear><ListItem>React Builds a new virtual DOM subtree.</ListItem></Appear>
          <Appear><ListItem>Diffs it with the old tree.</ListItem></Appear>
          <Appear><ListItem>Computes the minimal set of DOM mutations and puts them in a queue.</ListItem></Appear>
          <Appear><ListItem>And batch executes all updates.</ListItem></Appear>
        </List>
      </div>
    );
  }
}
