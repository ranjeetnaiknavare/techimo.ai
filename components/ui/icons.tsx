'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'img'>) {
  return (
    <img
      src="/techimo-logo.webp" // Path to the WebP logo in the public folder
      alt="Techimo Logo" // Alternative text for accessibility
      className={cn('h-4 w-4', className)} // Apply any additional classes
      {...props}
    />
  )
}

export { IconLogo }

