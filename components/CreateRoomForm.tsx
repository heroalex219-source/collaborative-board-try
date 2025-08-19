'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import type { RoomJoinedData } from '@/types'
import { useUserStore } from '@/stores/userStore'
import { useMembersStore } from '@/stores/memberStore'
import { socket } from '@/lib/socket'
import { createRoomSchema } from '@/lib/validations/createRoom'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import CopyButton from '@/components/CopyButton'

interface CreateRoomFormProps {
  roomId: string
}

type CreatRoomForm = z.infer<typeof createRoomSchema>

export default function CreateRoomForm({ roomId }: CreateRoomFormProps) {
  const router = useRouter()
  const { toast } = useToast()

  const setUser = useUserStore(state => state.setUser)
  const setMembers = useMembersStore(state => state.setMembers)

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<CreatRoomForm>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit({ username }: CreatRoomForm) {
    setIsLoading(false)
    socket.emit('create-room', { roomId, username })
    router.replace(`/${roomId}`)
  }

  useEffect(() => {
    socket.on('room-joined',({user,roomId,members}: RoomJoinedData) => {
      setUser(user)
      setMembers(members)
      router.replace(`/${roomId}`)
    })

    return () => {
      socket.off('room-joined')
    }
  },[router, toast, setUser, setMembers])

 { /*  useEffect(() => {
    socket.on('room-joined', ({ user, roomId, members }: RoomJoinedData) => {
      setUser(user)
      setMembers(members)
      router.replace(`/${roomId}`)
    })

    function handleErrorMessage({ message }: { message: string }) {
      toast({
        title: 'Failed to join room!',
        description: message,
      })
    }

    socket.on('room-not-found', handleErrorMessage)

    socket.on('invalid-data', handleErrorMessage)

    return () => {
      socket.off('room-joined')
      socket.off('room-not-found')
      socket.off('invalid-data', handleErrorMessage)
    }
  }, [router, toast, setUser, setMembers]) */ }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-medium'>Username</FormLabel>
              <FormControl>
                <Input 
                  className='h-11 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                  placeholder='Enter your name' 
                  {...field} 
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />

        <div>
          <p className='mb-3 text-sm font-medium'>Room ID</p>

          <div className='flex h-11 w-full items-center justify-between rounded-lg border bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 px-4 py-2 text-sm'>
            <span className='font-mono text-gray-700 dark:text-gray-300'>{roomId}</span>
            <CopyButton value={roomId} />
          </div>
        </div>

        <Button type='submit' className='mt-4 w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200'>
          {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Create a Room'}
        </Button>
      </form>
    </Form>
  )
}
