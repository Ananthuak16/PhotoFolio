// AlbumsList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, collection, onSnapshot } from '../firebaseConfig';
import AlbumsForm from './AlbumsForm';
import ImagesList from './ImagesList';
import { FaRegFolderOpen } from 'react-icons/fa';
import './AlbumsList.css';

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'albums'), (snapshot) => {
      setAlbums(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albumId);
  };

  return (
    <div className="albums-container">
      <AlbumsForm />
      <h2>Albums List</h2>
      <div className="albums-list">
        {albums.map((album) => (
          <Link
            key={album.id}
            to={`/albums/${album.id}`}
            className={`album-item ${selectedAlbum === album.id ? 'selected' : ''}`}
            onClick={() => handleAlbumClick(album.id)}
          >
            <FaRegFolderOpen className="folder-icon" />
            <span className="album-name">{album.name}</span>
          </Link>
        ))}
      </div>
      {selectedAlbum && <ImagesList albumId={selectedAlbum} />}
    </div>
  );
};

export default AlbumsList;
