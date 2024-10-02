'use client'

import { IconSun, IconMoon, IconLoader } from '@tabler/icons-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <IconLoader className='h-full w-full text-neutral-500 dark:text-neutral-300' />
  )

  if (resolvedTheme === 'dark') {
      return <IconSun onClick={() => setTheme('light')} className='h-full w-full text-neutral-500 dark:text-neutral-300' />
  }

  if (resolvedTheme === 'light') {
    return <IconMoon onClick={() => setTheme('dark')} className='h-full w-full text-neutral-500 dark:text-neutral-300' />
  }

}