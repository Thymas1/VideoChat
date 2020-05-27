import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/">EndrChat</StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: #26262b;
  color: white;
  height: 100px;
  padding: 10px;
  margin-top: 5px;
  display: flex;
`

const StyledLink = styled(Link)`
  font-family: Impact, Charcoal, sans-serif;
  color: white;
  text-decoration: none;
  font-size: 50px;
  padding-left: 10px;
`

export default Header

