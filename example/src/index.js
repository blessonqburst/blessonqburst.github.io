import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import SlideFirst from "./slides/slideFirst.js";
import SlideSecond from "./slides/slideSecond.js";
import SlideThird from "./slides/slideThird.js";
import SlideForth from "./slides/slideForth.js";
import SlideFifth from "./slides/slideFifth.js";
import SlideSixth from "./slides/slideSixth.js";
import SlideSeventh from "./slides/slideSeventh.js";
import SlideEight from "./slides/slideEight.js";
import SlideNineth from "./slides/slideNineth.js";
import SlideTenth from "./slides/slideTenth.js";
import SlideEleventh from "./slides/slideEleventh.js";
import SlideTwelth from "./slides/slideTwelth.js";
import SlideThirteenth from "./slides/slideThirteenth.js";
import SlideForteenth from "./slides/slideForteenth.js";
import SlideFifteenth from "./slides/slideFifteenth.js";
import SlideSixteenth from "./slides/slideSixteenth.js";
import SlideSeventeenth from "./slides/slideSeventeenth.js";
import SlideEighteenth from "./slides/slideEighteenth.js";
import SlideNineteenth from "./slides/slideNineteenth.js";
import SlideTwenty from "./slides/slideTwenty.js";
import SlideTwentyone from "./slides/slideTwentyone.js";
import SlideTwentytwo from "./slides/slideTwentytwo.js";
import SlideTwentythree from "./slides/slideTwentythree.js";
import SlideTwentyfour from "./slides/slideTwentyfour.js";
import SlideTwentyfive from "./slides/slideTwentyfive.js";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/images/react.png"),
  compfirst: require("../assets/images/first.png"),
  compsecond: require("../assets/images/second.png"),
  compthird: require("../assets/images/third.png"),
  parent: require("../assets/images/forth.png"),
  childfirst: require("../assets/images/fifth.png"),
  inverseparent: require("../assets/images/sixth.png"),
  childsecond: require("../assets/images/seventh.png"),
  proptype: require("../assets/images/proptype.png"),
  proptypevalid: require("../assets/images/proptypevalid.png"),
  getinitialstate: require("../assets/images/getinitialstate.png"),
  changestate: require("../assets/images/changestate.png"),
  life1: require("../assets/images/life1.png"),
  life2: require("../assets/images/life2.png"),
  life3: require("../assets/images/life3.png"),
  life4: require("../assets/images/life4.png"),
  flux: require("../assets/images/flux.png"),
  thinkingone: require("../assets/images/thinkingone.png"),
  thinkingtwo: require("../assets/images/thinkingtwo.png"),
  thinkingthree: require("../assets/images/thinkingthree.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Introduction to ReactJS
            </Heading>
            <Image src={images.react.replace("/", "")} margin="0px 100px 0px 0px"/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <SlideFirst/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideSecond/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideThird/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <SlideForth/>
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.compfirst} />
          <Slide transition={["slide"]} bgImage={images.compsecond} />
          <Slide transition={["spin"]} bgImage={images.compthird} />
          <Slide transition={["slide"]} bgColor="primary">
            <SlideFifth/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <SlideSixth/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/first.example")}
            />
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/codedeck/second.example")}
              margin= "20px auto"
            />
          </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <SlideSeventh/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideEight/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideNineth/>
            <Image src={images.parent.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTenth/>
            <Image src={images.childfirst.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideEleventh/>
            <Image src={images.inverseparent.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTwelth/>
            <Image src={images.childsecond.replace("/", "")} margin="0px" height="293px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideThirteenth/>
            <Fill>
              <Appear><Image src={images.proptype.replace("/", "")} margin={1} /></Appear>
            </Fill>
            <Fill>
              <Appear><Image src={images.proptypevalid.replace("/", "")} margin={1} /></Appear>
            </Fill>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideForteenth/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideFifteenth/>
            <Image src={images.getinitialstate.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideSixteenth/>
            <Image src={images.changestate.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideSeventeenth/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideEighteenth/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideNineteenth/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTwenty/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Sce­nar­ios
            </Heading>
            <Image src={images.life1.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.life2.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.life3.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.life4.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTwentyone/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Adding the DOM refs
            </Heading>
            <Appear>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/third.example")}
            />
            </Appear>
            <Appear>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/forth.example")}
              margin= "20px auto"
            />
            </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Event handling
            </Heading>
            <Appear>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/fifth.example")}
            />
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTwentytwo/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTwentythree/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTwentyfour/>
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.flux} />
          <Slide transition={["slide"]} bgColor="primary">
            <SlideTwentyfive/>
            <Appear>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/codedeck/sixth.example")}
                margin= "20px auto"
              />
            </Appear>
            <Appear>
              <Text bold margin="0px 0px 0px 0px">Route /about to About Component </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/seventh.example")}
              margin= "20px auto"
            />
            <Text bold margin="0px 0px 0px 0px">Route  /user/1234 to User Component </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              RouterHandler to props
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Eigth.example")}
              margin= "20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Not found route
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Nineth.example")}
              margin= "20px auto"
            />
          <Text bold margin="0px 0px 0px 0px">Catch all</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Redirect routes
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Tenth.example")}
              margin= "20px auto"
            />
          <Text bold margin="0px 0px 0px 0px">Params in the url</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Default route
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Eleventh.example")}
              margin= "20px auto"
            />
          <Text bold margin="0px 0px 0px 0px">Home is available at /</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Running the router
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Twelth.example")}
              margin= "20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Using makeHref
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Thirteenth.example")}
              margin= "20px auto"
            />
          <Text bold margin="0px 0px 0px 0px">Params in the link</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Link component
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Forteenth.example")}
              margin= "20px auto"
            />
          <Text bold margin="0px 0px 0px 0px">Params in the link</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              TransitionTo
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codedeck/Fifteenth.example")}
              margin= "20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black" textFont="primary">
              Thinking in React
            </Heading>
            <Appear><Image src={images.thinkingone.replace("/", "")} margin = "0px 3px 0px -120px" /></Appear>
            <Appear><Image src={images.thinkingtwo.replace("/", "")} margin="0px 0px 0px 6px" width = "63%"/></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.thinkingthree.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide transition={["spin"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Thank You
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
