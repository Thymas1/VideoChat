import React from "react"
import "./layout.css"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
const Main = styled.main`
  height: 80vh;
`
