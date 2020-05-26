import React from "react"
import styled from "styled-components"

const Footer = () => {
	return (
		<Div>
			<span>Made by Endresen-it tjenester,
			all rights reserved</span>
		</Div>
	)
}

export default Footer
const Div = styled.div`
	border-top: 0.5px solid darkgray;
	padding-top: 2vh;
	color: white;
	text-align: center;
	font-size: 10px;
`
