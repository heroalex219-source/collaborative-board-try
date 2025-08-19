import { nanoid } from 'nanoid'
import { Palette, Users, Zap } from 'lucide-react'

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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
      <ThemeMenuButton className='fixed right-6 top-6 z-10' />
      
      {/* Hero Section */}
      <div className='container mx-auto px-4 pt-20 pb-16'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6'>
            <Palette className='w-8 h-8 text-white' />
          </div>
          <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6'>
            Draw Together
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12'>
            Create, collaborate, and bring your ideas to life with friends in real-time. 
            The ultimate collaborative drawing experience.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          <div className='text-center p-6'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4'>
              <Zap className='w-6 h-6 text-blue-600 dark:text-blue-400' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Real-time Collaboration</h3>
            <p className='text-gray-600 dark:text-gray-400'>Draw together with friends instantly, see changes as they happen</p>
          </div>
          <div className='text-center p-6'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4'>
              <Users className='w-6 h-6 text-purple-600 dark:text-purple-400' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Easy Room Sharing</h3>
            <p className='text-gray-600 dark:text-gray-400'>Create or join rooms with simple room IDs, no signup required</p>
          </div>
          <div className='text-center p-6'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mb-4'>
              <Palette className='w-6 h-6 text-green-600 dark:text-green-400' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Rich Drawing Tools</h3>
            <p className='text-gray-600 dark:text-gray-400'>Customize colors, brush sizes, and create amazing artwork</p>
          </div>
        </div>

        {/* Main Card */}
        <div className='max-w-md mx-auto'>
          <Card className='backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl'>
            <CardHeader className='text-center pb-6'>
              <CardTitle className='text-2xl font-bold'>Get Started</CardTitle>
              <CardDescription className='text-base'>
                Create a new room or join an existing one
              </CardDescription>
            </CardHeader>

            <CardContent className='space-y-6'>
              <CreateRoomForm roomId={roomId} />

              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <span className='w-full border-t border-gray-200 dark:border-gray-700' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-4 bg-white dark:bg-gray-800 text-gray-500'>OR</span>
                </div>
              </div>

              <JoinRoomButtoon />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
