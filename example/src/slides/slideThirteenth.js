import React from "react";

import {
  Heading, List, ListItem
} from "../../../src";

export default class SlideThirteenth extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps textColor="black" textFont="primary">
          Property Types (PropTypes)
        </Heading>
        <List>
          <ListItem>propTypes contains properties and their types:</ListItem>
          <ListItem>For validate the prop’s value input.</ListItem>
        </List>
      </div>
    );
  }
}
