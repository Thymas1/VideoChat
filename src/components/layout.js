import React from "react"
import "./layout.css"
import Header from "./Header"



const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
