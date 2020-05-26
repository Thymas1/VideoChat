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
        {error && <P>*Please type in your Screenname and room</P>}
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
  padding: 20px;
  border: 0.5px solid darkgray;
  background-color: white;
  border-radius: 0;
  @media (min-width: 400px) {
    border-radius: 10px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #26262b;
`
const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
`
const StyledInput = styled.input`
  text-align: center;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 0.5px solid #26262b;
  color: #26262b;
  font-weight: bold;
  height: 30px;
  font-size: 25px;

  :focus {
    border: 0;
  }
`
const Button = styled.button`
  background-color: rgba(38, 38, 43, 0.63);
  border: 0;
  color: white;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  :hover {
    background-color: #26262b;
  }
`
const H1 = styled.h1`
  font-family: sans-serif;
  justify-self: center;
  font-size: 25px;
  font-weight: bold;
`
const P = styled.p`
  text-align: center;
  margin-top: 15px;
  margin-bottom: -10px;
  color: red;
`
