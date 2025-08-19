'use client'

import * as z from 'zod'
import { joinRoomSchema } from "@/lib/validations/joinRoom"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from "./ui/input"
import { socket } from '@/lib/socket'


type JoinRoomForm = z.infer<typeof joinRoomSchema>

export default function JoinRoomButtoon() {
    const [isLoading,setIsLoading] = useState(false);

    const form  = useForm<JoinRoomForm>({
        resolver:zodResolver(joinRoomSchema),
        defaultValues:{
            username:"",
            roomId:""
        }
    })

    function onSubmit({ roomId, username }: JoinRoomForm) {
      setIsLoading(true)
      socket.emit('join-room', { roomId, username })
    }

    useEffect(() => {
        //socket.on('room-not-found', () => {
          setIsLoading(false)
      }, [])


      return (
        <Dialog>
            <DialogTrigger asChild >
                <Button className='w-full h-11 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 font-medium rounded-lg transition-all duration-200'>
                    Join a Room
                </Button>

            </DialogTrigger>
            <DialogContent className='w-[90vw] max-w-[400px] bg-white dark:bg-gray-800'>
        <DialogHeader className='pb-6 text-center'>
          <DialogTitle className='text-2xl font-bold'>Join a Room</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      className='h-11 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                      placeholder='Enter your username' 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='roomId'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      className='h-11 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono' 
                      placeholder='Enter room ID' 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />

            <Button type='submit' className='mt-6 w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200'>
              {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Join'}
            </Button>
          </form>
        </Form>
      </DialogContent>
        </Dialog>
      )
}
  