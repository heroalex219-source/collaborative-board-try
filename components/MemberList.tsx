'use client'

import { useEffect } from 'react'
import { Users } from 'lucide-react'

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
    <div className='bg-gray-50 dark:bg-gray-800 rounded-xl p-4 select-none border border-gray-200 dark:border-gray-700'>
      <h2 className='pb-4 font-semibold text-gray-700 dark:text-gray-300'>
        <div className='flex justify-center items-center gap-2'>
          <Users className='w-4 h-4' />
          Members ({members.length})
        </div>
      </h2>

      <ScrollArea className='h-40'>
        <ul className='flex flex-col gap-2'>
          {members.map(({ id, username }) => (
            <li key={id} className='flex items-center gap-3 p-2 bg-white dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium'>
                {username.charAt(0).toUpperCase()}
              </div>
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300 truncate'>{username}</span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
