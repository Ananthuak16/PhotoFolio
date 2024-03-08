// ImageForm.js
import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import './ImageForm.css';

const ImageForm = ({ onAddImage }) => {
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleImageSubmit = (e) => {
    e.preventDefault();
    onAddImage(imageTitle, imageUrl);
    setImageTitle('');
    setImageUrl('');
    setIsFormOpen(false);
  };

  return (
    <div className={`image-form-container ${isFormOpen ? 'open' : ''}`}>
      {isFormOpen ? (
        <IoMdCloseCircle
          onClick={() => setIsFormOpen(false)}
          className="close-icon" // Add a class for styling
        />
      ) : (
        <button onClick={() => setIsFormOpen(true)}>Add Image</button>
      )}
      {isFormOpen && (
        <form onSubmit={handleImageSubmit}>
          <h2 style={{ color: 'white' }}>Add a New Image</h2>
          <label style={{ color: 'white' }}>
            Image Title:
            <input
              type="text"
              value={imageTitle}
              onChange={(e) => setImageTitle(e.target.value)}
              placeholder="Enter image title"
              style={{ color: 'black' }}
            />
          </label>
          <label style={{ color: 'white' }}>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              style={{ color: 'black' }}
            />
          </label>
          <button type="submit">Add Image</button>
        </form>
      )}
    </div>
  );
};

export default ImageForm;
