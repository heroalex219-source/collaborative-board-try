'use client'

import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
}

function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value)
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setHasCopied(false), 2000)

    return () => clearTimeout(timeout)
  }, [hasCopied])

  return (
    <Button
      type='button'
      variant='ghost'
      className='h-fit rounded-md p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200'
      onClick={() => {
        copyToClipboard(value)
        setHasCopied(true)
      }}
    >
      <span className='sr-only'>Copy</span>
      {hasCopied ? <Check className='h-4 w-4 text-green-500' /> : <Copy className='h-4 w-4' />}
    </Button>
  )
}
