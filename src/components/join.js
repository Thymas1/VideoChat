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
  const [error, setError] = useState(false)

  useEffect(() => {
    if (state.token && state.roomName) {
      navigate(`/room/${state.roomName}`)
    }
  }, [state])

  const handleSumbit = event => {
    event.preventDefault()

    getRoomToken({ identity, roomName })
  }
  const handleClick = () => {
    console.log(state.identity)
    if (!error && state.identity === "") {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSumbit}>
        <H1>Start or join a video call</H1>
        <StyledLabel>Display name:</StyledLabel>
        <StyledInput
          type={"text"}
          id="identity"
          value={identity}
          placeholder={"What should we call you?"}
          onChange={event => setIdentity(event.target.value)}
        />
        <StyledLabel>What room do you want to join?</StyledLabel>
        <StyledInput
          type={"text"}
          id="roomName"
          value={roomName}
          placeholder={"Name of room"}
          onChange={event => setRoomName(event.target.value)}
        />
        <Button type="submit" onClick={() => handleClick()}>
          {" "}
          join video chat
        </Button>
        {error && (
          <Error>
            <p>Please type in your Screenname and room</p>
          </Error>
        )}
      </Form>
    </Wrapper>
  )
}
export default Join

const Form = styled.form`
  margin-top: 100px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: 30rem;
  justify-content: center;
  border: 0.5px solid lightgrey;
  padding: 20px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
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
  font-family: sans-serif;
  justify-self: center;
  font-size: 25px;
  font-weight: bold;
`
const Error = styled.div`
  width: 100%;
  background-color: red;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: auto;
  text-align: center;
`
