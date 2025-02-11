require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerConfig");
const todoRouter = require("./routes/todoRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", todoRouter);

// ✅ Swagger UI 설정
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
  console.log(`📄 Swagger 문서: http://localhost:${PORT}/api-docs`);
});
