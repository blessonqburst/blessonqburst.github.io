import React from "react";

import {
  Heading, List, ListItem, Appear
} from "../../../src";

export default class SlideTwentyone extends React.Component {
  render() {
    return (<div>
        <Heading size={3} caps textColor="black" textFont="primary">
          Refs – Access the DOM
        </Heading>
        <List>
          <Appear><ListItem>Refs are a React feature for accessing and thus manipulating the HTML DOM.</ListItem></Appear>
          <Appear><ListItem>Ref scope is limited to the React component</ListItem></Appear>
          <Appear><ListItem>They essentially reference DOM elements</ListItem></Appear>
        </List>
      </div>
    );
  }
}
