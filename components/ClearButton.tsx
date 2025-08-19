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
            variant='ghost'
            className='w-16 h-10 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-none rounded-r-lg text-gray-700 dark:text-gray-300 font-medium transition-all duration-200'
            onClick={clearCanvas}
            
          >
            Clear
          </Button>
  )
}

export default ClearButton