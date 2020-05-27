import React from "react"
import styled from "styled-components"

const JoinChat = () => {
  return (
    <Wrapper>
      <Form>
        <H1>Start or join a chatroom</H1>
        <StyledLabel>Display name:</StyledLabel>
        <StyledInput
          type={"text"}
          id="identity"
          placeholder={"What should we call you?"}
        />
        <StyledLabel>What room do you want to join?</StyledLabel>
        <StyledInput type={"text"} id="roomName" placeholder={"Name of room"} />
        <Button type="submit" onClick={() => console.log("hei")}>
          {" "}
          join chatroom
        </Button>
      </Form>
    </Wrapper>
  )
}
export default JoinChat

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
