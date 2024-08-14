import express, { Application, Request, Response, NextFunction } from "express";
import { PORT } from "./config";
import { ErrorHandler, responseHandler } from "./helpers/response.helper";
import { StudentRouter } from "./routers/student.router";
import db from "./libs/mysql.lib";
export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandler();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send({
        message: "Hello World!",
      });
    });
    this.app.use("/student", new StudentRouter().run());
    this.app.use(
      (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
        res
          .status(err.statusCode)
          .json({ success: false, message: err.message });
      }
    );
  }

  private errorHandler() {
    this.app.use("*", (req: Request, res: Response) => {
      res.status(404).send(responseHandler("page not found", null, false));
    });

    this.app.use(
      (
        error: ErrorHandler,
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        res
          .status(error.statusCode)
          .send(responseHandler(error.message, null, false));
      }
    );
  }

  public start() {
    this.app.listen(PORT, () => {
      console.log("server is running on port " + PORT);
    });
    db.getConnection((err, connection) => {
      if (err) {
        console.log("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id ", connection.threadId);
    });
  }
}
