import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideEight extends React.Component {
  render() {
    return (<div>
        <Heading size={1} caps textColor="black" textFont="primary">
          Props
        </Heading>
        <List>
          <ListItem>Values can be passed to components as parameters (props).</ListItem>
          <ListItem>Props are just attributes assigned in JSX.</ListItem>
          <ListItem>Properties passed to children by parent are accessible by this.props.propsname.</ListItem>
          <ListItem>Properties are immutable. Once instantiate the object, you can’t change its properties.</ListItem>
          <ListItem>getDefaultProps() - set default values if not provided</ListItem>
        </List>
      </div>
    );
  }
}
