import React from "react";

import {
  List, ListItem, Text
} from "../../../src";

export default class SlideTwentythree extends React.Component {
  render() {
    return (<div>
        <Text bold caps margin="0px 0px 0px  -600px">Dispatcher</Text>
        <List>
          <ListItem>Central hub that manages all data flow in a Flux application.</ListItem>
          <ListItem>Essentially a registry of callbacks into the stores.</ListItem>
        </List>
        <Text bold caps margin="0px 0px 0px  -660px" >Stores</Text>
        <List>
          <ListItem>Stores contain the application state and logic.</ListItem>
          <ListItem>Manage the state of many objects.</ListItem>
          <ListItem>Store registers itself with the dispatcher and provides it with a callback.</ListItem>
        </List>
      </div>
    );
  }
}
