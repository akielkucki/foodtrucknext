import { GalleryImageData } from '@/types/gallery';

// Predefined aspect ratios for natural masonry flow
const ASPECT_RATIOS = [
  { width: 400, height: 300 },   // 4:3 landscape
  { width: 300, height: 400 },   // 3:4 portrait
  { width: 400, height: 400 },   // 1:1 square
  { width: 500, height: 300 },   // 5:3 wide landscape
  { width: 300, height: 500 },   // 3:5 tall portrait
  { width: 600, height: 400 },   // 3:2 landscape
  { width: 400, height: 600 },   // 2:3 portrait
];

export function generateGalleryImages(count: number, startId: number = 0): GalleryImageData[] {
  return Array.from({ length: count }, (_, i) => {
    const imageId = startId + i;
    const ratio = ASPECT_RATIOS[imageId % ASPECT_RATIOS.length];
    console.log(imageId)
    return {
      id: `gallery-${imageId}`,
      width: ratio.width,
      height: ratio.height,
      url: `/gallery/${imageId}.jpg`,
      author: `Photo ${imageId}`,
    };
  });
}

export function shuffleImages(images: GalleryImageData[]): GalleryImageData[] {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
