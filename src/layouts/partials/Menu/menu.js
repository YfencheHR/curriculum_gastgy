import * as React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import "./menu.scss"

const Menu = () => (
  <>
    <Container>
      <ul className={'menu'}>
        <li>
          <Link to={'/'} >Inicio</Link>
        </li>
        <li>
          <Link to={'/skills'} >Skills</Link>
        </li>
        <li>
          <Link to={'/projects'} >Proyectos</Link>
        </li>
        <li>
          <Link to={'/using-typescript'} >Ejemplo TS</Link>
        </li>
      </ul>
    </Container>
  </>
)


export default Menu