import React from "react";

import {
  Heading, List, ListItem, Text
} from "../../../src";

export default class SlideSeventeenth extends React.Component {
  render() {
    return (<div>
        <Heading size={1} caps textColor="black" textFont="primary">
          State
        </Heading>
        <Text textSize="1.5em" margin="50px 0px 0px -400px" bold>When you should use state?</Text>
        <List>
          <ListItem>Respond to user input.</ListItem>
          <ListItem>Server Request.</ListItem>
          <ListItem>Or the passage of time.</ListItem>
        </List>
      </div>
    );
  }
}
