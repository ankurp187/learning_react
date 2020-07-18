import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // console.log(props.images);
  const images = props.images.map((image) => {
    // return <img key={image.id} alt={image.description} src={image.urls.regular} />
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
