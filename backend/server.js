const express = require("express");
const path = require('path');
const { errorHandler } = require('./middleware/errormiddleware');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
const multer = require('multer');
const fs = require('fs');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Configuración para servir archivos estáticos
app.use('/assets/images', express.static(path.join(__dirname, '../frontend/src/components/assets/images')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Configuración de multer para manejar la subida de archivos
const upload = multer({
  dest: 'uploads/' // Carpeta temporal para almacenar las imágenes subidas
});

const imagesPath = path.join(__dirname, '../frontend/src/components/assets/images');
const imagesListPath = path.join(imagesPath, 'images.json');

// Función para actualizar la lista de imágenes
const updateImagesList = () => {
  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      console.error('Error reading images directory:', err);
      return;
    }
    const images = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
    fs.writeFile(imagesListPath, JSON.stringify(images), err => {
      if (err) {
        console.error('Error writing images list:', err);
      }
    });
  });
};

// Ruta para cargar una imagen
app.post('/upload', upload.single('image'), (req, res) => {
  console.log('Uploading image...');
  const tempPath = req.file.path;
  const targetPath = path.join(imagesPath, req.file.originalname);
  console.log(`Temp path: ${tempPath}`);
  console.log(`Target path: ${targetPath}`);

  fs.rename(tempPath, targetPath, err => {
    if (err) {
      console.error('Error renaming file:', err);
      return res.status(500).json({ error: 'Error renaming file', details: err.message });
    }
    updateImagesList();
    console.log('Image uploaded successfully');
    res.status(200).json({ message: 'Image uploaded successfully' });
  });
});

// Ruta para eliminar una imagen
app.delete('/delete/:imageName', (req, res) => {
  console.log('Deleting image:', req.params.imageName);
  const targetPath = path.join(imagesPath, req.params.imageName);
  console.log(`Target path: ${targetPath}`);

  fs.unlink(targetPath, err => {
    if (err) {
      console.error('Error deleting file:', err);
      return res.status(500).json({ error: 'Error deleting file', details: err.message });
    }
    updateImagesList();
    console.log('Image deleted successfully');
    res.status(200).json({ message: 'Image deleted successfully' });
  });
});

// Ruta para obtener la lista de imágenes
app.get('/images', (req, res) => {
  fs.readFile(imagesListPath, (err, data) => {
    if (err) {
      console.error('Error reading images list:', err);
      return res.status(500).json({ error: 'Error reading images list', details: err.message });
    }
    res.status(200).json(JSON.parse(data));
  });
});

app.use(errorHandler);

app.listen(port, () => console.log(`Servidor escuchando en el puerto: ${port}`));
