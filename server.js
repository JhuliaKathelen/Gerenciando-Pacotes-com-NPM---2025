const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// Servir o index.html na rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// rota para mostrar o package.json
app.get("/_api/package.json", (req, res) => {
  const filePath = path.join(__dirname, "package.json");
  const data = fs.readFileSync(filePath, "utf8");
  res.type("json").send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
