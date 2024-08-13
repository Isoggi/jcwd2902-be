import { Router, Response, Request } from "express";
export const expenseRouter = Router();

expenseRouter.get("/", (req: Request, res: Response) => {
  res.send({ success: true, message: "Expense Kris" });
});

expenseRouter.post("/", (req: Request, res: Response) => {
  res.status(201).send({
    success: true,
    message: "Post Expense",
  });
});
