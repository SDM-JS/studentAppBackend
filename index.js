import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import errorMiddleware from "./middleware/error.middleware.js";
import router from "./routes/auth.routes.js";
import managerRoutes from "./routes/manager.routes.js";

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());
app.use(router);
app.use(managerRoutes);
app.use(morgan("combined"));
app.use(helmet());
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
