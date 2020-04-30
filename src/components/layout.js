import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header>
      <StyledLink to="/">Video Chat</StyledLink>
    </Header>
    <main>{children}</main>
  </>
)

export default Layout

const Header = styled.header`
background-color: #15118b;
color: white;
height: 50px;
padding: 10px;
`
const StyledLink = styled(Link)`
color: white;
text-decoration: none;
font-size: 30px;
padding-left: 10px;
font-family: Courier;
`
