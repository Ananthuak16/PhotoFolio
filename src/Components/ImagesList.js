// ImagesList.js
import React, { useState, useEffect } from 'react';
import { db, onSnapshot, collection, query, where, addDoc } from '../firebaseConfig';
import ImageForm from './ImagesForm';
import './ImagesList.css';

const ImagesList = ({ albumId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'images'), where('albumId', '==', albumId)),
      (snapshot) => {
        setImages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    return () => unsubscribe();
  }, [albumId]);

  const handleAddImage = async (title, url) => {
    try {
      await addDoc(collection(db, 'images'), {
        title,
        url,
        albumId,
      });
    } catch (error) {
      console.error('Error adding image: ', error);
    }
  };

  return (
    <div className="images-list-container">
      <ImageForm onAddImage={handleAddImage} />
      <h2>Images List</h2>
      <ul className="images-list">
        {images.map((image) => (
          <li key={image.id} className="image-item">
            <img src={image.url} alt={image.title} />
            <p className="image-title">{image.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesList;
