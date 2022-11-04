const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
const loginRoute = require("./routes/login");
const productoRoute = require("./routes/producto");
const reporteRoute = require("./routes/reporteproducto");
const path = require("path");

//setting
const app = express();
const port = process.env.PORT || 9000;

//swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

swaggerDocument = require("../swagger.json");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "PYME Backend",
            description: "Api del proyecto PYME Backend",
            version: "1.0.0",
  },
  servers: [
    {
        url: "http://localhost:9000",
    }
  ]
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};
// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", adminRoute);
app.use("/api", productoRoute);
app.use("/api", reporteRoute);
app.use("/api", loginRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));



//mongoose conexion
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log('conectado a mongodb Atlas'))
.catch((error)=>console.error(error));


app.listen(port, () => console.log('Servidor activo en el puerto', port));