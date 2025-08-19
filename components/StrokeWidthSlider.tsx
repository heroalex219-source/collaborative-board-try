
'use client'

import { useCanvasStore } from '@/stores/canvasStore'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

export default function StrokeWidthSlider() {
  const [strokeWidth, setStrokeWidth] = useCanvasStore(state => [
    state.strokeWidth,
    state.setStrokeWidth,
  ])

  return (
    <div className='space-y-4'>
      <div className='flex select-none items-center justify-between'>
        <Label className='text-sm font-semibold text-gray-700 dark:text-gray-300'>Stroke Width</Label>

        <span className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full font-medium'>
          {strokeWidth[0]}
        </span>
      </div>

      <Slider
        min={1}
        max={50}
        step={1}
        value={strokeWidth}
        onValueChange={setStrokeWidth}
        className='[&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-blue-500 [&_[role=slider]]:shadow-lg'
        aria-label='Stroke width'
      />
    </div>
  )
}
