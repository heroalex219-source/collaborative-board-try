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
            variant='ghost'
            className='w-16 h-10 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-none rounded-l-lg border-r border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium transition-all duration-200'
            disabled={isLoading}
            onClick={undoCanvas}
          >
            {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Undo'}
          </Button>
        
  )
}
