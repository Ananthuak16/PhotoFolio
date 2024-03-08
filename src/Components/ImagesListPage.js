// ImagesListPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ImagesList from './ImagesList';

const ImagesListPage = () => {
  const { albumId } = useParams();

  return (
    <div>
    
      <ImagesList albumId={albumId} />
    </div>
  );
};

export default ImagesListPage;
