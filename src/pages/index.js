import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

import Main from "../layouts/Main/main";

const IndexPage = () => (
  <Main>
    <Seo title="Home" />
    <h1>Yfenche Hernández Rodríguez</h1>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </Main>
)

export default IndexPage
