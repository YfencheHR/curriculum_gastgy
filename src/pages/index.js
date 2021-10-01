import * as React from "react"
import Seo from "../components/seo"

import Main from "../layouts/Main/main";
import Profile from "../components/Profile"

const IndexPage = () => (
  <Main colorTheme={{
    color: '#000',
    color_body: '#bbb',
    background: '#ccc',
    background_body: '#000',
  }}>
    <Seo title="Home" />
    <Profile />
  </Main>
)

export default IndexPage
