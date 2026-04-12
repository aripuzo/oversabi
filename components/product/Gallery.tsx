'use client'

import { useState } from 'react'

interface GalleryProps {
  images: string[]
}

// African print placeholder pattern
const placeholderPattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Cdefs%3E%3Cpattern id='p' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Crect width='40' height='40' fill='%23e8e4dc'/%3E%3Ccircle cx='20' cy='20' r='8' fill='%23b91c1c' opacity='0.15'/%3E%3Ccircle cx='0' cy='0' r='4' fill='%231e3a5f' opacity='0.1'/%3E%3Ccircle cx='40' cy='0' r='4' fill='%231e3a5f' opacity='0.1'/%3E%3Ccircle cx='0' cy='40' r='4' fill='%231e3a5f' opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='4' fill='%231e3a5f' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23p)'/%3E%3C/svg%3E`

export function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const hasImages = images && images.length > 0
  const displayImages = hasImages ? images : [placeholderPattern]

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div
        className="relative aspect-[4/5] bg-[#e8e4dc] overflow-hidden"
        style={{
          backgroundImage: `url("${displayImages[selectedIndex]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Yellow accent bar on left */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#c9a227]/30" />
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-16 h-16 shrink-0 border-2 transition-colors overflow-hidden ${
                selectedIndex === index ? 'border-[#1e3a5f]' : 'border-transparent'
              }`}
              style={{
                backgroundImage: `url("${image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
