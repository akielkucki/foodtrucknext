'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { generateGalleryImages } from '@/lib/gallery-utils';
import { GalleryImageData } from '@/types/gallery';
import GalleryImage from './GalleryImage';
import { Spinner } from '@/components/ui/spinner';

const INITIAL_LOAD = 20;
const LOAD_MORE_COUNT = 12;
const MAX_IMAGES = 77; // 1. HARD LIMIT SETTING

export default function GalleryGrid() {
  const [images, setImages] = useState<GalleryImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextId, setNextId] = useState(INITIAL_LOAD);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialImages = generateGalleryImages(INITIAL_LOAD);
      setImages(initialImages);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const loadMoreImages = useCallback(() => {
    // 2. Stop if loading or if we've reached the limit
    if (isLoading || !hasMore || images.length >= MAX_IMAGES) return;

    setIsLoading(true);

    setTimeout(() => {
      // 3. Calculate exactly how many we need.
      // If we have 70 images and want 12 more, but max is 78, we only ask for 8.
      const remainingSlots = MAX_IMAGES - images.length;
      const countToFetch = Math.min(LOAD_MORE_COUNT, remainingSlots);

      if (countToFetch <= 0) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      const newImages = generateGalleryImages(countToFetch, nextId);

      setImages((prev) => [...prev, ...newImages]);
      setNextId((prev) => prev + countToFetch);

      // If we hit the max after this batch, stop future loads
      if (images.length + newImages.length >= MAX_IMAGES) {
        setHasMore(false);
      }

      setIsLoading(false);
    }, 800);
  }, [isLoading, nextId, hasMore, images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isLoading && hasMore) {
            loadMoreImages();
          }
        },
        { threshold: 0.1, rootMargin: '400px' }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loadMoreImages, isLoading, hasMore]);

  return (
      <div className="w-full min-h-screen bg-neutral-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Gallery
            </h1>
            <p className="mt-4 text-neutral-500">
              A collection of our best work below.
            </p>
          </header>

          {/* 4. LAYOUT: CSS Columns for seamless masonry look.
            'space-y-6' adds gap between items vertically.
            'gap-6' adds gap between columns horizontally.
        */}
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6">
            <AnimatePresence mode="popLayout">
              {images.map((image, index) => (
                  /* 5. CRITICAL: 'break-inside-avoid' prevents images from being cut in half across columns */
                  <div key={image.id} className="break-inside-avoid">
                    <GalleryImage image={image} index={index} />
                  </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Loading / End State */}
          <div className="relative mt-12 py-12">
            {hasMore && <div ref={observerRef} className="absolute bottom-20 h-4 w-full" />}

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

            {/* 6. Message when limit is reached */}
            {!hasMore && (
                <div className="flex flex-col items-center justify-center pt-8 text-center animate-in fade-in duration-700">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                    Gallery Complete
                  </p>
                  <p className="text-sm text-neutral-300">
                    You've reached the end of the collection.
                  </p>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}