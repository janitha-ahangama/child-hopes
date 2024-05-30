import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const image_carousel = ({ projectImagesUrls }) => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {projectImagesUrls.map((url, index) => (
        <div key={index} className="relative">
          <img src={url} alt={`Project Image ${index + 1}`} className="w-auto h-64 object-cover rounded-lg mb-6" />
        </div>
      ))}
    </Carousel>
  );
};

export default image_carousel;