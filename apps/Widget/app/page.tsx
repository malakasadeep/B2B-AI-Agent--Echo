"use client"
import { useVapi } from "@/modules/widget/hooks/use-vapi"
import { Button } from "@workspace/ui/components/button"

export default function Page() {

  const {
    startCall,
    endCall,
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
  } = useVapi();

  return (
    <div className="flex min-h-svh p-6">
      <p>apps/widget</p>

      <div className="flex gap-3 mt-3">
        <Button onClick={() => startCall()} >Start Call</Button>
        <Button onClick={() => endCall()} variant="destructive">End Call</Button>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <p>Connected: {isConnected ? "Yes" : "No"}</p>
        <p>Connecting: {isConnecting ? "Yes" : "No"}</p>
        <p>Speaking: {isSpeaking ? "Yes" : "No"}</p>
        <p>Transcript: {JSON.stringify(transcript, null, 2)}</p>
      </div>
    </div>
  )
}
