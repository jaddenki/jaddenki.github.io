'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/ibelick/nim" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>jaja</span>
            <span>gyatt</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
        </div>
      </div>
    </footer>
  )
}
