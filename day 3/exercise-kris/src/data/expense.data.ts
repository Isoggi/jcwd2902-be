import fs from "fs";
import { IExpense, IExpenses } from "../interfaces/expense.interface";

const path = "./data/data.json";
const logPath = "./datalog.txt";

const getData = () => {
  return JSON.parse(fs.readFileSync(path, "utf8"));
};

const writeData = (data: any) => {
  fs.writeFileSync(path, data);
};

const writeLog = (message: string = "") => {
  const log = fs.readFileSync(logPath, "utf-8");
  fs.writeFileSync(logPath, log + " \n" + new Date() + " " + message);
};

const getExpenses = (id?: number) => {
  if (id) {
    return getData().expenses.find((exp: IExpense) => exp.id === id);
  }
  return getData().expenses as IExpenses;
};

const addExpense = (data: IExpense) => {
  const expenses = getData().expenses;
  data.id = expenses.length + 1;
  expenses.push(data);
  writeData({ expenses });
  writeLog(JSON.stringify(data));
  return data;
};

const updateExpense = (data: IExpense) => {
  const expenses = getData().expenses;
  const index = expenses.findIndex((exp: IExpense) => exp.id === data.id);
  expenses[index] = data;
  writeData({ expenses });
  writeLog(JSON.stringify(data));
  return data;
};

const deleteExpense = (id: number) => {
  const expenses = getData().expenses;
  const index = expenses.findIndex((exp: IExpense) => exp.id === id);
  expenses.splice(index, 1);
  writeData({ expenses });
  writeLog(JSON.stringify({ id }));
  return { id };
};

export const expenseData = {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
};
