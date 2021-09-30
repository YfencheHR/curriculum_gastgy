import * as React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"


const Menu = () => (
  <>
    <Container>
      <ul>
        <li>
          <Link to={'/'} >Inicio</Link>
        </li>
        <li>
          <Link to={'/skills'} >Skills</Link>
        </li>
        <li>
          <Link to={'/clients'} >Clientes</Link>
        </li>
        <li>
          <Link to={'/using-typescript'} >Ejemplo TS</Link>
        </li>
      </ul>
    </Container>
  </>
)


export default Menu