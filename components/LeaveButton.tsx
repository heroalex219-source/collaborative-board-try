'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

import { socket } from '@/lib/socket'
import { Button } from '@/components/ui/button'

export default function LeaveButton() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      variant='outline'
      className='absolute bottom-0 w-full h-11 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 font-medium rounded-lg transition-all duration-200'
      onClick={() => {
        setIsLoading(true)
        socket.emit('leave-room')
        setTimeout(() => {
          router.replace('/')
        }, 600)
      }}
    >
      {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Leave Room'}
    </Button>
  )
}
