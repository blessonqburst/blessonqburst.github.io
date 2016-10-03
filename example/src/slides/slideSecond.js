import React from "react";

import {
  Heading, List, ListItem, Appear
} from "../../../src";

export default class SlideSecond extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps textColor="black">
          Why use React.js?
        </Heading>
        <List>
          <Appear><ListItem>Simple</ListItem></Appear>
          <Appear><ListItem>Declarative</ListItem></Appear>
          <Appear><ListItem>Build Reusable and interative Components</ListItem></Appear>
          <Appear><ListItem>Explicit Mutations</ListItem></Appear>
          <Appear><ListItem>Its just JavaScript</ListItem></Appear>
          <Appear><ListItem>Virtual DOM</ListItem></Appear>
          <Appear><ListItem>Components are client side as well as server side render</ListItem></Appear>
        </List>
      </div>
    );
  }
}
