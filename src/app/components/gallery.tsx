"use client";

// components/PropertyGallery.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable"; // Import the library

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

  // Swipe Handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: showNextImage,
    onSwipedRight: showPreviousImage,
  });

  // Handle keyboard events for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isCarouselOpen) return;

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      } else if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "Escape") {
        closeCarousel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCarouselOpen, currentImageIndex]);

  return (
    <div className="space-y-4">
      {/* Grid View */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="relative h-40 w-full">
            <Image
              src={image}
              alt={`Property Image ${index + 1}`}
              fill
              className="object-cover"
              onClick={() => openCarousel(index)}
            />
            {index === 3 && images.length > 4 && (
              <button
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold"
                onClick={() => openCarousel(3)}
              >
                View All Photos
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Carousel View */}
      {isCarouselOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80"
          {...swipeHandlers} // Add swipe handlers here
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeCarousel}
          >
            X
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
            className={`absolute left-4 text-white text-2xl ${
              currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={showPreviousImage}
            disabled={currentImageIndex === 0}
          >
            &lt;
          </button>
          <button
            className={`absolute right-4 text-white text-2xl ${
              currentImageIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={showNextImage}
            disabled={currentImageIndex === images.length - 1}
          >
            &gt;
          </button>

          {/* Thumbnail Preview */}
          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative h-20 w-20 cursor-pointer border-2 ${
                  currentImageIndex === index
                    ? "border-white"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
