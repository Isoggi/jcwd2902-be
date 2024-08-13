import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { config } from "dotenv";
import { expenseRouter } from "./routes/expense.route";

config();
const PORT = process.env.PORT || 8001;
const secret = process.env.API_SECRET_KEY || "mysecretkey";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers["key"];
  if (key !== secret) {
    return res.status(401).send("Unauthorized");
  }
  console.log("Lewat Middleware!", new Date().toISOString());
  next();
};

app.get("/", (req: Request, res: Response) => {
  res.send("Day 3 Exercise Kris");
});

app.use("/expenses", middleware, expenseRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    success: false,
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
