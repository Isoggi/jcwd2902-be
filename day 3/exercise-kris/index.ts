import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { expenseRouter } from "./routes/expense.route";
const PORT = 8001;
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());

const secret = "mysecretkey";
