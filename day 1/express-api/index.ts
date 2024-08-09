import express, { Application, Request, Response } from "express";

import { config } from "dotenv";
config();
const PORT = process.env.PORT || 3000;
const app: Application = express();

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello there, this is a nodeJS API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
