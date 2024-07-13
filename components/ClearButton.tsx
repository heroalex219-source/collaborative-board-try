'use client'

import { useParams } from "next/navigation"
import { Button } from "./ui/button"
import { socket } from "@/lib/socket"
import { useEffect } from "react"

interface ClearButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
  clear: () => void
}

const ClearButton = ({canvasRef,clear}:ClearButtonProps) => {
  const {roomId} = useParams();

  const clearCanvas = () => {
    const canvasElement = canvasRef.current
    if(!canvasElement) return 

    socket.emit('add-undo-point',{roomId,undoPoint:canvasElement.toDataURL()})
    
    clear()
    socket.emit('clear-canvas',roomId)
  }


  useEffect(() => {
    socket.on('clear-canvas',clear)

    return () => {
      socket.off('clear-canvas')
    }
    
  },[clear])

  return (
    <Button
            variant='outline'
            className='w-16 bg-stone-700 hover:bg-stone-800 rounded-none rounded-bl-md border-0 border-b border-l p-0 focus-within:z-10'
            onClick={clearCanvas}
            
          >
            Clear
          </Button>
  )
}

export default ClearButton