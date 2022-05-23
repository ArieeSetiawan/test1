const express = require('express');
const app = express();
const productRoutes = require('./routes/product-routes');
const PORT = 3000;

const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
  }

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product', productRoutes); 

app.post("/product",(req, res) => {
    res.send("Berhasil Menambahkan Produk")
  })

app.put("/product",(req, res) => {
    res.send("Berhasil Mengubah Produk")
  })

app.delete("/product",(req, res) => {
    res.send("Berhasil Menghapus Produk")
  })

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  
app.listen(PORT, ()=>{
        console.log("Server is running on port", PORT);
    })
    