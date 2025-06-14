import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("merhaba")
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});