const express = require("express");
const router = require("./routes/routes");
//require("./database/mongo")
require("./databases/sql")

const app = express();

app.use(express.json());

 
app.use("/", router);
const port = 5050;
app.listen(port, () => console.log(`Servidor escuchando por el puerto ${port}!`));