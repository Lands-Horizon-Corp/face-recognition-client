import Webcam from "react-webcam"
import {useCamera} from "@/hooks/use-camera"

import { useState } from "react"
import { Button } from "#/components/ui/button"
import {useAddFace, useIdentifyFace} from "./../face-recognition.service"
import { cn } from "#/lib/utils"
import { toast } from 'sonner'
import type { IAddFaceRequest, IFaceErrorMessage, IIdentity } from "../face-recognition.types"
import { Input } from "#/components/ui/input"
import { DIRECTIONS } from "../face-recognition.constants"

type RecognitionState = "identify" | "add"

export default function FaceRecognitionPage() {
  const [recognitionState, setRecognitionState] = useState<RecognitionState>("identify")

  const {camRef, captureImageToFile} = useCamera()
  const [addFaceInfo, setAddFaceInfo] = useState<IAddFaceRequest>({
    user_id: "",
    group_id: "",
    direction: "front",
    selfie_media: null
  })

  const AddFaceMutation = useAddFace()
  const IdentifyFaceMutation = useIdentifyFace()
  
  const isPending = AddFaceMutation.isPending || IdentifyFaceMutation.isPending

  const handleSelfie = () => {
      
      const image = captureImageToFile({
        captureFileName: `selfie_${Date.now()}.png`,
      })

      if (!image) {
        toast.error("Failed to capture image. Please try again.")
        return
      }
      if (recognitionState === "identify") {
        toast.promise(IdentifyFaceMutation.mutateAsync({file: image}), {
          loading: "Identifying face...",
          success: "Face identified successfully!",
          error: "Failed to identify face. Please try again."
        })
      } else {
        toast.promise(AddFaceMutation.mutateAsync({
          user_id: addFaceInfo.user_id,
          group_id: addFaceInfo.group_id,
          direction: addFaceInfo.direction,
          selfie_media: image
        }), {
          loading: "Adding face...",
          success: "Face added successfully!",
          error: (error:unknown) => {
            if (error instanceof Error) {
              return `Failed to add face: ${error.message}`
          }
        }
      })
    }
  })

    
  
  }

  return (
    <main className="h-screen flex flex-col items-center  gap-4">  
      <div
        className={cn(
            'relative size-60 rounded-full overflow-hidden bg-muted transition-all',
            isPending ? 'animate-pulse' : ''
        )}
      >

      <Webcam
        audio={false}
        className="absolute inset-0 h-full w-full object-cover scale-110"
        minScreenshotHeight={500}
        minScreenshotWidth={500}
        ref={camRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ 
          facingMode: 'user',
          width: { ideal: 500 },
          height: { ideal: 500 }, }}
          />
        </div>

        {recognitionState === "add" ? <h1 className="text-2xl font-bold">Add Face</h1> : <h1 className="text-2xl font-bold">Identify Face</h1>}
        {recognitionState === "add" && (
          <>
            <Input 
              onChange={(e) => setAddFaceInfo(prev => ({...prev, user_id: e.target.value}))}
              placeholder="User ID"
              value={addFaceInfo.user_id}
            />
        <Input 
          onChange={(e) => setAddFaceInfo(prev => ({...prev, group_id: e.target.value}))}
          placeholder="Group ID"
          value={addFaceInfo.group_id}
        />
        <div className=" flex gap-2">
        {DIRECTIONS.map(direction => (
          <Button 
            className={addFaceInfo.direction === direction ? 'bg-primary text-black ' : 'bg-muted text-foreground'}
            key={direction}
            onClick={() => setAddFaceInfo(prev => ({...prev, direction}))}
          >
            {direction}
          </Button>
        ))}
        </div>
        </>

        )}

      <Button className=" -translate-x-1/2" onClick={() => setRecognitionState(prev => prev === "identify" ? "add" : "identify")}>
        {recognitionState === "identify" ? "Switch to Add Face" : "Switch to Identify Face"}
      </Button>
      <Button className=" -translate-x-1/2" disabled={isPending} onClick={handleSelfie}>
        Take Selfie
      </Button>
      {isPending ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 p-4 rounded">Processing...</div>
        </div>
      ) :
      <RecievedContent addFaceData={AddFaceMutation.data} identifyFaceData={IdentifyFaceMutation.data} />
      }
    </main>
  )
} 


function RecievedContent({addFaceData, identifyFaceData}: {
    addFaceData: {id:string, 
      error?: IFaceErrorMessage } | undefined; 
  identifyFaceData: IIdentity | undefined}) {
  return (
    <div className=" items-center justify-center">
      <div className=" p-4 rounded">
        <h1>add face result</h1>
        <p>{addFaceData ? JSON.stringify(addFaceData) : "No data available"}</p>
      </div>

      <div className="p-4 rounded">
        <h1>identify face result</h1>
        <p>{identifyFaceData ? JSON.stringify(identifyFaceData) : "No data available"}</p>
      </div>
    </div>
  )
}