import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Button } from 'react-bootstrap';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people SDHJKFJKHJKSDFHSDFHJK</h1>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>test scss</p>
    <Button variant="primary">Button #1</Button>
    <Button variant="secondary" className="mx-2">Button #2</Button>
    <Button variant="success">Button #3</Button>
  
    <p><Button variant="primary">Click me</Button></p>
    <p><Button variant="primary">Click me</Button></p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
