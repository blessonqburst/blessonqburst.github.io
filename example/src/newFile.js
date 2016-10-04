import React from "react";

import {
  Heading, Link, Slide, Text
} from "../../src";

export default class NewFile extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Spectacle
        </Heading>
        <Heading size={1} fit caps>
          A ReactJS Presentation Library
        </Heading>
        <Heading size={1} fit caps textColor="black">
          Where You Can Write Your Decks In JSX
        </Heading>
        <Link href="https://github.com/FormidableLabs/spectacle">
          <Text bold caps textColor="tertiary">View on Github</Text>
        </Link>
        <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>


          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary"
            notes="Hard to find cities without any pizza"
          >
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Pizza Toppings
            </Heading>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem/>
                    <TableHeaderItem>2011</TableHeaderItem>
                    <TableHeaderItem>2013</TableHeaderItem>
                    <TableHeaderItem>2015</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>None</TableItem>
                    <TableItem>61.8%</TableItem>
                    <TableItem>39.6%</TableItem>
                    <TableItem>35.0%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pineapple</TableItem>
                    <TableItem>28.3%</TableItem>
                    <TableItem>54.5%</TableItem>
                    <TableItem>61.5%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pepperoni</TableItem>
                    <TableItem/>
                    <TableItem>50.2%</TableItem>
                    <TableItem>77.2%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Olives</TableItem>
                    <TableItem/>
                    <TableItem>24.9%</TableItem>
                    <TableItem>55.9%</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </div>
    );
  }
}
{/*
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
    <Heading size={3} textColor="black" textFont="primary">
      RouterHandler to props
    </Heading>
    <CodePane
      lang="jsx"
      source={require("raw!../assets/codedeck/Eigth.example")}
      margin= "20px auto"
    />
  </Slide>
  <Slide transition={["slide"]} bgColor="primary">
    <Heading size={3} textColor="black" textFont="primary">
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
    <Heading size={3} textColor="black" textFont="primary">
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
    <Heading size={3} textColor="black" textFont="primary">
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
    <Heading size={3} textColor="black" textFont="primary">
      Running the router
    </Heading>
    <CodePane
      lang="jsx"
      source={require("raw!../assets/codedeck/Twelth.example")}
      margin= "20px auto"
    />
  </Slide>
  <Slide transition={["slide"]} bgColor="primary">
    <Heading size={3} textColor="black" textFont="primary">
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
    <Heading size={3} textColor="black" textFont="primary">
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
    <Heading size={3} textColor="black" textFont="primary">
      transitionTo
    </Heading>
    <CodePane
      lang="jsx"
      source={require("raw!../assets/codedeck/Fifteenth.example")}
      margin= "20px auto"
    />
  </Slide>
  */
}
