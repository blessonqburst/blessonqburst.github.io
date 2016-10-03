import React from "react";

import {
  List, ListItem, Text
} from "../../../src";

export default class SlideNineteenth extends React.Component {
  render() {
    return (<div>
        <Text textSize="1em" margin="10px 0px -30px -600px" bold>shouldComponentUpdate</Text>
        <List>
          <ListItem>Always called before the render method and enables to define if a re-rendering is needed or can be skipped.</ListItem>
          <ListItem>This method is never called on initial rendering.</ListItem>
        </List>
        <Text textSize="1em" margin="-10px 0px -30px -650px" bold>componentWillUpdate</Text>
        <List>
          <ListItem>Called immediately before a render.</ListItem>
          <ListItem>You cannot use this.setState() in this method.</ListItem>
        </List>
        <Text textSize="1em" margin="-10px 0px -30px -580px" bold>componentWillReceiveProps</Text>
        <List>
          <ListItem>Invoked when a component is receiving new props.</ListItem>
          <ListItem>This method is not called for the initial render.</ListItem>
          <ListItem>Use this method as a way to react to a prop change before render() is called by updating the state with setState.</ListItem>
        </List>
      </div>
    );
  }
}
