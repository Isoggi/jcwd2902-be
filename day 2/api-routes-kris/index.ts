import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { _router } from "./route";
const PORT = 8001;
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());

const secret = "mysecretkey";

// app.use("/", (req: Request, res: Response, next: NextFunction) => {
//   const key = req.headers["key"];
//   if (key !== secret) {
//     return res.status(401).send("Unauthorized");
//   }

//   console.log("lewat middleware!", new Date().toISOString());
//   next();
// });
const middleware = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers["key"];
  if (key !== secret) {
    return res.status(401).send("Unauthorized");
  }
  console.log("lewat middleware!", new Date().toISOString());
  next();
};

app.use("/products", middleware, _router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  // throw new Error("Something went wrong");
  res.status(500).send({ success: false, message: error.message });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Day 2 API Routes!");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("About!");
});
app.get(/a/, (req: Request, res: Response) => {
  res.send("Anything with a in their word !");
});

app.get(/.*fly$/, (req: Request, res: Response) => {
  res.send("Anything ends with fly!");
});

app.get("/users/:userId/books/:bookId", (req: Request, res: Response) => {
  res.send(req.params);
});

app.get(
  "/exp",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("lewat middleware!");
    console.log(req);
    next();
  },
  (req: Request, res: Response) => {
    res.send("exp next response ");
  }
);

app.use("/users", _router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
