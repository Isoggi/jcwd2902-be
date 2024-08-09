import fs from "fs";
import http from "http";
import express, { Application, Request, Response } from "express";

const PORT = 3000;
interface IProduct {
  id: number;
  desc: string;
  product_Name: string;
}
interface IData {
  Products: IProduct[];
}

const getData = (): IData => {
  return JSON.parse(fs.readFileSync("./data.json", "utf-8"));
};

const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Welcome to my API");
});

app.get("/products/:id", (req: Request, res: Response) => {
  res.send({ success: true, data: req.params.id });
});
