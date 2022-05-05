const express = require("express");
// const bodyParser = require("body-Parser"); // não esta usando, deveria remover até porque está cansando problemas na aplicação e o correto é body-parser e não body-Parser (P com letra maiuscula)
const routes = require("./routes/index.js"); // quando você tem um arquivo index.js dentro de uma pasta não precisa declarar ele aqui. troque por './routes' e o node implicitamente farar o trabalho.

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`The server is running on ${port}`));

module.exports = app;
