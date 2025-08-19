'use client'

import { useEffect, useRef } from 'react'

import { socket } from '@/lib/socket'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const DisconnectedDialog = () => {
  const dialogTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    socket.on('disconnected', () => {
      dialogTriggerRef.current?.click()
    })

    return () => {
      socket.off('disconnected')
    }
  }, [])

  return (
    <Dialog>
      <DialogTrigger ref={dialogTriggerRef} className='hidden'></DialogTrigger>

      <DialogContent className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
        <DialogHeader className='text-center'>
          <DialogTitle className='text-xl font-bold text-red-600 dark:text-red-400'>Connection Lost!</DialogTitle>
          <DialogDescription className='text-gray-600 dark:text-gray-400 mt-2'>
            You were out of the browser for a while and lost the connection. Please create
            a new room or join a room to draw again.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DisconnectedDialog
