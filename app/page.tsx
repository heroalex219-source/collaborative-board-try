import { nanoid } from 'nanoid'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import ThemeMenuButton from '@/components/ThemeMenuButton'
import CreateRoomForm from '@/components/CreateRoomForm'
import JoinRoomButtoon from '@/components/JoinRoomButton'

export const dynamic = 'force-dynamic'

export default function Home() {
  const roomId = nanoid()

  return (
    <div className='flex dark:bg-stone-800 h-screen flex-col items-center justify-between pb-5 pt-[13vh]'>
       <ThemeMenuButton className='fixed right-[5vw] top-5 flex-1 md:right-5' />

      <Card className='w-[90vw] max-w-[400px] dark:bg-stone-700'>
        <CardHeader>
          <CardTitle className='flex justify-center' >Draw Together</CardTitle>
          <CardDescription className='flex justify-center'  >
            Draw with your friends in real-time
          </CardDescription>
        </CardHeader>

        <CardContent className='flex flex-col space-y-4'>
          <CreateRoomForm roomId={roomId} />

          <div className='flex text-sm justify-center items-center space-x-2 '>
         
            <span className='text-xs text-muted-foreground'>OR</span>
            
          </div>

         <JoinRoomButtoon />
        </CardContent>
      </Card>

      
    </div>
  )
}
