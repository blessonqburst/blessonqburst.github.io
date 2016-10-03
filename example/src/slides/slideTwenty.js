import React from "react";

import {
  List, ListItem, Text
} from "../../../src";

export default class SlideTwenty extends React.Component {
  render() {
    return (<div>
        <Text textSize="1em" margin="10px 0px -30px -600px" bold>componentDidUpdate</Text>
        <List>
          <ListItem>Called immediately after a render.</ListItem>
          <ListItem>This method can be used to perform DOM operations after the data has been updated.</ListItem>
        </List>
        <Text textSize="1em" margin="-10px 0px -30px -580px" bold>componentWillUnmount</Text>
        <List>
          <ListItem>Called immediately before a component is unmounted.</ListItem>
          <ListItem>This method can be beneficial when needing to perform clean up operations.</ListItem>
        </List>
      </div>
    );
  }
}
