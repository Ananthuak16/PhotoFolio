// AlbumsForm.js
import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebaseConfig';
import { IoMdCloseCircle } from 'react-icons/io';
import './AlbumsForm.css';

const AlbumsForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [albumName, setAlbumName] = useState('');

  const handleAlbumSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new album to the 'albums' collection in Firestore
      await addDoc(collection(db, 'albums'), {
        name: albumName,
      });

      // Clear the input field after submitting
      setAlbumName('');
      // Hide the form after submitting
      setShowForm(false);
    } catch (error) {
      console.error('Error adding album: ', error);
    }
  };

  return (
    <div className={`albums-form-container ${showForm ? 'open' : ''}`}>
      {showForm ? (
        <IoMdCloseCircle
          onClick={() => setShowForm(false)}
          style={{ fontSize: '2em', color: 'Red', cursor: 'pointer' }}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Create a New Album</button>
      )}
      {showForm && (
        <form onSubmit={handleAlbumSubmit} className="albums-form">
          <h2 style={{ color: 'white' }}>Create a New Album</h2>
          <label style={{ color: 'white' }}>
            Album Name:
            <input
              type="text"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              placeholder="Enter album name"
              style={{ color: 'black' }}
            />
          </label>
          <button type="submit">Create Album</button>
        </form>
      )}
    </div>
  );
};

export default AlbumsForm;
