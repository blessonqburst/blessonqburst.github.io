import React from "react";

import {
  List, ListItem, Text
} from "../../../src";

export default class SlideTwentyfour extends React.Component {
  render() {
    return (<div>
        <Text bold caps margin="0px 0px 0px  -600px">Views</Text>
        <List>
          <ListItem>Typical React component.</ListItem>
          <ListItem>After is mounted, it goes and get its initial state from store and setup listener.</ListItem>
          <ListItem>When it receives the event from the store, it first requests the new data it needs via the stores public getter methods.</ListItem>
          <ListItem>It then calls its own setState(), causing its render() method and the render() method of all its descendants to run. </ListItem>
        </List>
      </div>
    );
  }
}
