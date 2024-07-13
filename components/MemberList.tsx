'use client'

import { useEffect } from 'react'

import type { Notification } from '@/types'
import { useMembersStore } from '@/stores/memberStore'

import { useToast } from '@/components/ui/use-toast'
import { ScrollArea } from '@/components/ui/scroll-area'
import { socket } from '@/lib/socket'

export default function MemberList() {
  const { toast } = useToast()

  const [members, setMembers] = useMembersStore(state => [
    state.members,
    state.setMembers,
  ])

  useEffect(() => {
    socket.on('update-members', members => {
      setMembers(members)
    })

    socket.on('send-notification', ({ title, message }: Notification) => {
      toast({
        title,
        description: message,
      })
    })

    return () => {
      socket.off('update-members')
      socket.off('send-notification')
    }
  }, [toast, setMembers])

  return (
    <div className=' bg-stone-800 rounded-sm p-2 my-6 select-none'>
      <h2 className='pb-2.5 font-bold '>
        <div className='flex justify-center items-center'>
          Members
        </div>
      </h2>

      <ScrollArea className='h-48'>
        <ul className='flex flex-col gap-1 rounded-sm px-1'>
          {members.map(({ id, username }) => (
            <li key={id}>{username}</li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
