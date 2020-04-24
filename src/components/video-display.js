import React, { useEffect } from "react"
import useTwilioVideo from "../hooks/use-twilio-video"
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
			{state.room && (
				<button onClick={leaveRoom}>
					Leave room
				</button>
			)}
      <div ref={videoRef} />
    </>
  )
}

export default VideoDisplay
