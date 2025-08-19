'use client'

import { HexAlphaColorPicker } from 'react-colorful'

import { useCanvasStore } from '@/stores/canvasStore'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function ColorPicker() {
  const [strokeColor, setStrokeColor] = useCanvasStore(state => [
    state.strokeColor,
    state.setstrokeColor,
  ])

  return (
    <div className='space-y-3'>
      <Label className='select-none text-sm font-semibold text-gray-700 dark:text-gray-300'>Stroke Color</Label>

      <Popover>
        <PopoverTrigger asChild className='w-full'>
          <Button className='h-12 w-full rounded-lg p-1 ring-2 ring-gray-200 dark:ring-gray-600 ring-offset-2 hover:ring-blue-400 dark:hover:ring-blue-500 transition-all duration-200'>
            <div
              className='h-full w-full rounded-md border-2 border-white dark:border-gray-800'
              style={{ background: strokeColor }}
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent className='w-fit p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl'>
          <HexAlphaColorPicker color={strokeColor} onChange={setStrokeColor} />
        </PopoverContent>
      </Popover>
    </div>
  )
}
