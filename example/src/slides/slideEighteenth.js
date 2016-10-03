import React from "react";

import {
  Heading, List, ListItem, Text
} from "../../../src";

export default class SlideEighteenth extends React.Component {
  render() {
    return (<div>
        <Text textSize="1.5em" margin="0px 0px 0px  0px" bold>REACT COMPONENT LIFECYCLE</Text>
        <Text textSize="1em" margin="40px 0px -30px -650px" bold>componentWillMount</Text>
        <List>
          <ListItem>Invoked once (both on the client and server) before initial render.</ListItem>
          <ListItem>Good place to make connection to your db service.</ListItem>
          <ListItem>Do not call set state method here.</ListItem>
        </List>
        <Text textSize="1em" margin="-10px 0px -30px -650px" bold>componentDidMount</Text>
        <List>
          <ListItem>Invoked once, only on the client ( not on the server).</ListItem>
          <ListItem>Immediately after the initial rendering occurs.</ListItem>
          <ListItem>Good place for you to make AJAX request to fetch data for first used.</ListItem>
        </List>
      </div>
    );
  }
}
