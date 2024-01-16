import React, { useState, useEffect } from 'react';

interface ImageData {
  url: string;
  // Add other fields that your API returns
}

const ImageDisplay: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const displayImages = images.slice(0, 1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const data = await response.json();
        setImages(data); // Adjust this based on your API response structure
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      setIsLoading(false);
    };

    fetchImages();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid">
      {displayImages.map(image => (
        <img key={image.url} src={image.url} alt="From API" className="mx-auto max-w-[600px] max-h-[480.75px]" style={{ width: '600px', height: '480px'}} />
      ))}
    </div>
  );
};

export default ImageDisplay;
