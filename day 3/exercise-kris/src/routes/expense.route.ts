import { Router, Response, Request } from "express";
import fs from "fs";
import { expenseData } from "../data/expense.data";
import { IExpense } from "../interfaces/expense.interface";
export const expenseRouter = Router();

expenseRouter.get("/", (req: Request, res: Response) => {
  const result = expenseData.getExpenses();
  res.send({
    success: true,
    data: result,
    message: "Expense List: " + result.length,
  });
});

expenseRouter.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  const result = expenseData.addExpense(req.body as IExpense);
  res.status(201).send({
    success: true,
    data: result,
    message: "Post Expense: " + result.title,
  });
});

expenseRouter.patch("/:id", (req: Request, res: Response) => {
  console.log(req.body);
  const result = expenseData.updateExpense(req.body);
  res.send({
    success: true,
    message: "Patch Expense: " + result,
  });
});

expenseRouter.put("/:id", (req: Request, res: Response) => {
  console.log(req.body);
  const result = expenseData.updateExpense(req.body);
  res.send({
    success: true,
    message: "Put Expense: " + JSON.stringify(result),
  });
});

expenseRouter.delete("/:id", (req: Request, res: Response) => {
  const result = expenseData.deleteExpense(Number(req.params.id));
  res.send({
    success: true,
    message: "Delete Expense: " + result,
  });
});

expenseRouter.get("/total", (req: Request, res: Response) => {
  const types = req.query.type as { type: "date" | "category" }["type"];
  const params =
    types === "date"
      ? { start: req.query.start, end: req.query.end }
      : req.query.category;
  const result = expenseData.totalExpense({ type: types, params });
  res.send({
    success: true,
    data: result,
    message: "Total Expense: " + result,
  });
});

expenseRouter.get("/:id", (req: Request, res: Response) => {
  const result = expenseData.getExpenses(Number(req.params.id));
  res.send({
    success: true,
    data: result,
    message: "Get Expense: " + (result.title ?? "Empty"),
  });
});
