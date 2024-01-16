import React, { useState, useEffect } from 'react';

interface ImageData {
  url: string;
}

const CatIcon: React.FC = () => {
  const [iconUrl, setIconUrl] = useState<string>('');

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
        const data = await response.json();
        if (data.length > 0) {
          setIconUrl(data[0].url);
        }
      } catch (error) {
        console.error('Error fetching icon:', error);
      }
    };

    fetchIcon();
  }, []);

  if (!iconUrl) return <div>Loading icon...</div>;

  return (
    <img src={iconUrl} alt="Cat icon" style={{ width: '100px', height: '100px', marginRight:"15px"}} />
  );
};

export default CatIcon;
