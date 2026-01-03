'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { GalleryImageData } from '@/types/gallery';
import ImageSkeleton from './ImageSkeleton';

interface GalleryImageProps {
  image: GalleryImageData;
  index: number;
}

export default function GalleryImage({ image, index }: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: index < 20 ? index * 0.05 : 0,
        layout: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Skeleton loader */}
      {!isLoaded && <ImageSkeleton aspectRatio={image.height / image.width} />}

      {/* Image container with rounded corners and shadow */}
      <motion.div
        className="relative overflow-hidden rounded-xl shadow-lg"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image.url}
          alt={image.author}
          width={image.width}
          height={image.height}
          className={`w-full h-auto transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-4"
        >
          <div className="text-white">
            <p className="text-sm font-semibold">{image.author}</p>
            <p className="text-xs text-slate-300">{image.width} × {image.height}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
