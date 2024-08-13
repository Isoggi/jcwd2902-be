import { Router, Response, Request } from "express";
import fs from "fs";
import { expenseData } from "../data/expense.data";
export const expenseRouter = Router();

expenseRouter.get("/", (req: Request, res: Response) => {
  const result = expenseData.getExpenses();
  res.send({
    success: true,
    data: result,
    message: "Expense Kris: " + result.length,
  });
});

expenseRouter.get("/:id", (req: Request, res: Response) => {
  const result = expenseData.getExpenses(Number(req.params.id));
  res.send({
    success: true,
    data: result,
    message: "Expense Kris" + result.title,
  });
});

expenseRouter.post("/", (req: Request, res: Response) => {
  const result = expenseData.addExpense(req.body);
  res.status(201).send({
    success: true,
    data: result,
    message: "Post Expense",
  });
});

expenseRouter.patch("/:id", (req: Request, res: Response) => {
  const result = expenseData.updateExpense(req.body);
  res.send({
    success: true,
    message: "Patch Expense: " + result,
  });
});

expenseRouter.delete("/:id", (req: Request, res: Response) => {
  const result = expenseData.deleteExpense(Number(req.params.id));
  res.send({
    success: true,
    message: "Delete Expense: " + result,
  });
});
