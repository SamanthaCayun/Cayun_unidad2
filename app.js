import express from "express"
const app =express()

app.get('/home', (req, res) => {
  const products = [
    { id: 1, nombre: 'Tablet', precio: 250, descripcion: ' Pantalla táctil de alta resolución , batería de larga duración y  gran rendimiento .' },
    { id: 2, nombre: 'Camara', precio: 500, descripcion: 'Cámara de alta calidad, perfecta para fotos y videos nítidos' },
    { id: 3, nombre: 'Auriculares', precio: 150, descripcion: 'Auriculares de gran calidad, ideales para música, llamadas y gaming. ' },
  ];
  res.json(products);
});


app.use(express.json());


app.get('/home', (req, res) => {
  res.json(productos);  
});


app.post('/registro', (req, res) => {
  const { username, email, password } = req.body;
  
  res.json({
      mensaje: 'Usuario registrado correctamente',
      usuario: { username, email }
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  res.json({
      mensaje: 'Login exitoso',
      usuario: { email }
  });
});
  
  
app.listen(3000,() => {
    console.log("el servidor activo http://localhost:3000")
})