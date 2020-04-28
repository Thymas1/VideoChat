import React, { useEffect } from "react"
import useTwilioVideo from "../hooks/use-twilio-video"
import styled from "styled-components"
import { navigate } from "../../.cache/gatsby-browser-entry"

const VideoDisplay = ({ roomID }) => {
  const { state, startVideo, videoRef, leaveRoom } = useTwilioVideo()

  useEffect(() => {
    if (!state.token) {
      navigate("/", { state: { roomName: roomID } })
    }
    if (!state.room) {
      startVideo()
    }
    window.addEventListener("beforeunload", leaveRoom)

    return () => {
      window.removeEventListener("beforeunload", leaveRoom)
    }
  }, [state, roomID, startVideo, leaveRoom])

  return (
    <>
      <h1>{roomID}</h1>
      {state.room && <button onClick={leaveRoom}>Leave room</button>}
      <VideoWrapper ref={videoRef} />
    </>
  )
}

export default VideoDisplay

const VideoWrapper = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 10px;
    grid-template-areas: " . . . ." " . . . ." " . . . .";
  padding: 10px;
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`
