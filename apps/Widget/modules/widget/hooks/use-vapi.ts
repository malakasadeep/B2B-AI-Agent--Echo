import Vapi from "@vapi-ai/web"
import { useEffect, useState } from "react"

interface TranscriptMessage {
  role: "user" | "assistant"
  text: string
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([])

  useEffect(() => {
    const vapiInstance = new Vapi("83e0924f-60a9-4850-9890-8c3a1877a770")
    setVapi(vapiInstance)

    vapiInstance.on("call-start", () => {
      setIsConnected(true)
      setIsConnecting(false)
      setTranscript([])
    })

    vapiInstance.on("call-end", () => {
      setIsConnected(false)
      setIsConnecting(false)
      setIsSpeaking(false)
    })

    vapiInstance.on("speech-start", () => {
      setIsSpeaking(true)
    })

    vapiInstance.on("speech-end", () => {
      setIsSpeaking(false)
    })

    vapiInstance.on("error", (error) => {
      setIsConnecting(false)
      console.error("Vapi Error:", error)
    })

    vapiInstance.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role === "user" ? "user" : "assistant",
            text: message.transcript,
          },
        ])
      }
    })

    return () => {
      vapiInstance?.stop()
    }
  }, [])

  const startCall = () => {
    setIsConnecting(true)

    if (vapi) {
      vapi.start("a8f256ac-e16b-4a5f-9393-57f8f35a3b82")
    }
  }

  const endCall = () => {
    if (!vapi) return
    vapi.stop()
  }

  return {
    startCall,
    endCall,
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
  }
}
