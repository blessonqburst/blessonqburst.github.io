import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideTwentyfive extends React.Component {
  render() {
    return (<div>
        <Heading size={1} caps textColor="black" textFont="primary">
          React-Router
        </Heading>
        <List>
          <ListItem>Routing make UI consistent with URL.</ListItem>
          <ListItem>Routing url to React Component</ListItem>
        </List>
      </div>
    );
  }
}
