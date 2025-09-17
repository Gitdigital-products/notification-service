const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notification Service API",
      version: "1.0.0",
      description: "API for sending and managing notifications"
    }
  },
  apis: ["./src/routes/*.js"]
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
const notificationRoutes = require("./routes/notifications");
app.use("/notifications", notificationRoutes);

app.get("/health", (req, res) => res.json({ status: "ok", service: "notification-service" }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Notification Service running on port ${PORT}`));