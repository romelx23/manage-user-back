import express from "express";
import payload from "payload";
import cors from "cors";

require("dotenv").config();
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: "http://localhost:5173", // Permite tu frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization", "x-token"], // Incluye 'x-token'
};

app.use(cors(corsOptions)); // Aplicar la configuración CORS

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
    logger: payload.logger,
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
