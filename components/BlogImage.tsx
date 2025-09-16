'use client'

import Image from 'next/image'
import { useState } from 'react'

interface BlogImageProps {
  src: string
  alt: string
  className?: string
}

export default function BlogImage({ src, alt, className = '' }: BlogImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (hasError) {
    return (
      <div
        className={`relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-200 ${className}`}
      >
        <span className="text-sm text-gray-500">图片加载失败</span>
      </div>
    )
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-lg ${className}`} style={{ aspectRatio: '16/9' }}>
      {isLoading && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200 dark:bg-gray-700">
          <span className="text-sm text-gray-500 dark:text-gray-400">加载中...</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
      />
    </div>
  )
}
