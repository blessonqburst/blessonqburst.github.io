import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideSeventh extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps textColor="black">
          Unidirectional Data Flow
        </Heading>
        <List>
          <ListItem>- As compare to other MVC frameworks/Library Reactjs use the concept of unidirectional data flow.</ListItem>
          <ListItem>- In Reactjs application the data flow from the parent to the children component by the props.</ListItem>
          <ListItem>- setState is used to update/refresh the UI when the state change.</ListItem>
        </List>
      </div>
    );
  }
}
