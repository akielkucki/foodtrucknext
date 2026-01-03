'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { generateGalleryImages } from '@/lib/gallery-utils';
import { GalleryImageData } from '@/types/gallery';
import GalleryImage from './GalleryImage';
import { Spinner } from '@/components/ui/spinner';

const INITIAL_LOAD = 20;
const LOAD_MORE_COUNT = 12;

export default function GalleryGrid() {
  const [images, setImages] = useState<GalleryImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Start true to prevent flash
  const [nextId, setNextId] = useState(INITIAL_LOAD);
  const observerRef = useRef<HTMLDivElement>(null);

  // Initial load
  useEffect(() => {
    // Simulate initial fetch delay for smoothness
    const timer = setTimeout(() => {
      const initialImages = generateGalleryImages(INITIAL_LOAD);
      setImages(initialImages);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Load more images
  const loadMoreImages = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const newImages = generateGalleryImages(LOAD_MORE_COUNT, nextId);
      setImages((prev) => [...prev, ...newImages]);
      setNextId((prev) => prev + LOAD_MORE_COUNT);
      setIsLoading(false);
    }, 800);
  }, [isLoading, nextId]);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isLoading && images.length > 0) {
            loadMoreImages();
          }
        },
        { threshold: 0.1, rootMargin: '400px' } // Increased margin for smoother preload
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loadMoreImages, isLoading, images.length]);

  return (
      <div className="w-full min-h-screen bg-neutral-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">

          {/* Optional Header */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Photography
            </h1>
            <p className="mt-4 text-neutral-500">
              A collection of moments frozen in time.
            </p>
          </header>

          {/* Masonry Layout using CSS Columns */}
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6">
            <AnimatePresence mode="popLayout">
              {images.map((image, index) => (
                  <GalleryImage key={image.id} image={image} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {/* Loading State / Footer */}
          <div className="relative mt-12 py-12">
            {/* Observer Target */}
            <div ref={observerRef} className="absolute bottom-20 h-4 w-full" />

            {isLoading && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center gap-3"
                >
                  <Spinner size="lg" className="text-neutral-900" />
                  <span className="text-sm font-medium text-neutral-500 animate-pulse">
                        Curating more shots...
                    </span>
                </motion.div>
            )}

            {!isLoading && images.length > 0 && (
                <div className="flex justify-center">
                  <p className="text-xs text-neutral-300 uppercase tracking-widest">End of Gallery</p>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}