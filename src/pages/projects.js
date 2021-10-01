import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import Main from "../layouts/Main/main"

const Projects = () => (
  <Main>
    <Seo title="" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Main>
)

export default Projects
