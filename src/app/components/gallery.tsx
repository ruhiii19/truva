// components/PropertyGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images }) => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Grid View */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="relative h-40 w-full">
            <Image
              src={image}
              alt={`Property Image ${index + 1}`}
              fill
              className="object-cover rounded"
              onClick={() => openCarousel(index)}
            />
          </div>
        ))}
        {images.length > 4 && (
          <button
            className="relative flex items-center justify-center h-40 w-full bg-gray-800 text-white rounded"
            onClick={() => openCarousel(4)}
          >
            +{images.length - 4} More
          </button>
        )}
      </div>

      {/* Carousel View */}
      {isCarouselOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeCarousel}
          >
            Close
          </button>
          <button
            className={`absolute left-4 text-white ${
              currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={showPreviousImage}
            disabled={currentImageIndex === 0}
          >
            Prev
          </button>
          <div className="relative h-96 w-full max-w-4xl">
            <Image
              src={images[currentImageIndex]}
              alt={`Property Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <button
            className={`absolute right-4 text-white ${
              currentImageIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={showNextImage}
            disabled={currentImageIndex === images.length - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
