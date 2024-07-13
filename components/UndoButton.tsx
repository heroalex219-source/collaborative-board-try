'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'

import { socket } from '@/lib/socket'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'


interface UndoButtonProps {
  undo: (lastUndoPoint: string) => void
}

export default function UndoButton({ undo }: UndoButtonProps) {
  const { roomId } = useParams()

  const [isLoading, setIsLoading] = useState(false)



  const undoCanvas = () => {
    setIsLoading(true)
    socket.emit('get-last-undo-point', roomId)
  }



  useEffect(() => {
    // This socket does undo function
    socket.on('last-undo-point-from-server', (lastUndoPoint: string) => {
      undo(lastUndoPoint)
      socket.emit('undo', {
        canvasState: lastUndoPoint,
        roomId,
      })

      socket.emit('delete-last-undo-point', roomId)
      setIsLoading(false)

      return () => {
        socket.off('last-undo-point-from-server')
      }
    })
  }, [roomId, undo])

  return (
    
          <Button
            variant='outline'
            className='w-16 bg-stone-700 hover:bg-stone-800 rounded-none rounded-bl-md border-0 border-b border-l p-0 focus-within:z-10'
            disabled={isLoading}
            onClick={undoCanvas}
          >
            {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Undo'}
          </Button>
        
  )
}
