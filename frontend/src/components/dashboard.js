import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Dashboard.css';

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true); // Cambia esto según el rol del usuario

  useEffect(() => {
    // Fetch images from the server when the component mounts
    const fetchImages = async () => {
      try {
        const response = await fetch('/images');
        if (response.ok) {
          const imageNames = await response.json();
          const imageObjects = imageNames.map(name => ({
            src: `/assets/images/${name}`,
            alt: name,
            legend: name
          }));
          setImages(imageObjects);
        } else {
          console.error('Error fetching images');
        }
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, []);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.image.files[0];
    formData.append('image', file);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Refresh the image list
        const fetchImages = async () => {
          try {
            const response = await fetch('/images');
            if (response.ok) {
              const imageNames = await response.json();
              const imageObjects = imageNames.map(name => ({
                src: `/assets/images/${name}`,
                alt: name,
                legend: name
              }));
              setImages(imageObjects);
            } else {
              console.error('Error fetching images');
            }
          } catch (error) {
            console.error('Error fetching images', error);
          }
        };

        fetchImages();
      } else {
        console.error('Error uploading image');
      }
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  const handleImageDelete = async (imageName) => {
    try {
      const response = await fetch(`/delete/${imageName}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Refresh the image list
        const fetchImages = async () => {
          try {
            const response = await fetch('/images');
            if (response.ok) {
              const imageNames = await response.json();
              const imageObjects = imageNames.map(name => ({
                src: `/assets/images/${name}`,
                alt: name,
                legend: name
              }));
              setImages(imageObjects);
            } else {
              console.error('Error fetching images');
            }
          } catch (error) {
            console.error('Error fetching images', error);
          }
        };

        fetchImages();
      } else {
        console.error('Error deleting image');
      }
    } catch (error) {
      console.error('Error deleting image', error);
    }
  };

  return (
    <main className="main">
      <div className="content">
        <h1>Tu éxito contable y financiero, nuestra prioridad.</h1>
        <p className="highlight">
          <span>¡Potencia</span> tus finanzas y alcanza <span>tus metas!</span>
        </p>
        <p className="hashtag">#MasQueUnContador</p>
        <div className="buttons">
          <a href="/empieza_form.html" className="start">Empieza</a>
          <a href="/register" className="advice">Agenda tu asesoría</a>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
              
              {isAdmin && <button onClick={() => handleImageDelete(image.alt)}>Eliminar</button>}
            </div>
          ))}
        </Carousel>
        {isAdmin && (
          <div className="admin-controls">
            <h2>Añadir Imagen</h2>
            <form onSubmit={handleImageUpload}>
              <input type="file" name="image" required />
              <button type="submit">Añadir Imagen</button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
