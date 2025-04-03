'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon, LeafIcon, FlowerIcon, CloudIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'Sage',
    id: 'sage',
    icon: <LeafIcon className="h-4 w-4" />, // Import LeafIcon from lucide-react
  },
  {
    label: 'Rose',
    id: 'rose',
    icon: <FlowerIcon className="h-4 w-4" />, // Import FlowerIcon from lucide-react
  },
  {
    label: 'Lavender',
    id: 'lavender',
    icon: <CloudIcon className="h-4 w-4" />, // Import CloudIcon from lucide-react
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
      
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="mr-8 font-medium text-black dark:text-white">
          Jadden Picardal
        </Link>
     <ThemeSwitch />
      </div>


      <nav className="flex items-center space-x-6">
        <Link 
          href="/motion" 
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
        >
          motion
        </Link>
        <span> / </span>
        <Link 
          href="/matcha" 
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
        >
          matcha
        </Link>
      </nav>
    </header>
  )
}
