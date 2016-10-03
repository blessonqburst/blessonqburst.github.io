import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideForteenth extends React.Component {
  render() {
    return (<div>
        <Heading size={1} caps textColor="black" textFont="primary">
          State
        </Heading>
        <List>
          <ListItem>To manage the data that changes inside the components.</ListItem>
          <ListItem>Accessible with this.state</ListItem>
          <ListItem>getInitialState() - sets the initial state values</ListItem>
          <ListItem>this.setState()- update new value for state variables.</ListItem>
          <ListItem>Whenever this function is called the UI is automatically re-rendered.</ListItem>
        </List>
      </div>
    );
  }
}
