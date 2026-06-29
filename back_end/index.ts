import express from "express";

const app = express();

app.post("/", (req,res) => {
    res.json("Você acessou a rota inicial");
    console.log("Rota inicial acessada");
});

app.listen(3000, () => {
  console.log("Hello World: Porta 3000");
});
