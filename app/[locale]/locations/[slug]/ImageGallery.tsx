'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [images.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, close, prev, next])

  // Skip the first image if it's also the featuredImage (already in hero)
  const galleryImages = images.slice(1)

  if (galleryImages.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(i + 1)} // +1 because we skipped index 0
            className="relative overflow-hidden rounded-xl cursor-zoom-in group"
            style={{ paddingBottom: '66.66%' }}
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 2}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.92)] p-4"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ height: 'min(80vh, 700px)' }}>
              <Image
                src={images[lightboxIndex]}
                alt={`${title} — photo ${lightboxIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Counter */}
            <p className="text-center text-[rgba(255,255,255,0.45)] text-sm mt-3">
              {lightboxIndex + 1} / {images.length}
            </p>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white text-3xl hover:text-[#e8d5a0] transition-colors p-2"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white text-3xl hover:text-[#e8d5a0] transition-colors p-2"
              aria-label="Next"
            >
              ›
            </button>
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-[rgba(255,255,255,0.5)] hover:text-white transition-colors text-2xl"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
