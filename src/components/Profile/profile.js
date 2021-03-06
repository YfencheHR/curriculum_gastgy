import * as React from "react"
import "./profile.scss"
import { StaticImage } from "gatsby-plugin-image"

const Profile = () => (
  <div className={'profile'}>
    <h1>Yfenche Hernández Rodríguez</h1>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </div>
)


export default Profile