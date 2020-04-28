import React, { useEffect, useState } from "react"
import styled from "styled-components"
import useTwilioVideo from "../hooks/use-twilio-video"
import { navigate } from "gatsby"

const Join = ({ location }) => {
  const defaultRoom =
    (location && location.state && location.state.roomName) || ""
  const { state, getRoomToken } = useTwilioVideo()
  const [identity, setIdentity] = useState(defaultRoom)
  const [roomName, setRoomName] = useState(defaultRoom)

	useEffect(() => {
		if(state.token && state.roomName){
			navigate(`/room/${state.roomName}`)
		}
	}, [state])

  const handleSumbit = event => {
    event.preventDefault()

    getRoomToken({ identity, roomName })
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSumbit}>
        <H1>Start or join a video call</H1>
        <StyledLabel>DISPLAY NAME:</StyledLabel>
        <StyledInput
          type={"text"}
          id="identity"
          value={identity}
          onChange={event => setIdentity(event.target.value)}
        />
        <StyledLabel>What room do you want to join?</StyledLabel>
        <StyledInput
          type={"text"}
          id="roomName"
          value={roomName}
          onChange={event => setRoomName(event.target.value)}
        />
        <Button type="submit"> join video chat</Button>
      </Form>
    </Wrapper>
  )
}
export default Join

const Form = styled.form`
  margin-top: 100px;
  font-family: Courier;
  display: flex;
  flex-direction: column;
  width: 30rem;
  padding-top: 20px;
  justify-content: center;
  border: 0.5px solid lightgrey;
  padding: 20px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
`
const StyledInput = styled.input`
  border-radius: 0;
  margin-bottom: 10px;
`
const Button = styled.button`
  background-color: #15118b;
  color: white;
`
const H1 = styled.h1`
  justify-self: center;
  font-size: 25px;
  font-weight: bold;
`
