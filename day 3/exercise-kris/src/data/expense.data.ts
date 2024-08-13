import fs from "fs";
import { IExpense, IExpenses } from "../interfaces/expense.interface";

const path = "./src/data/data.json";
const logPath = "./src/data/datalog.txt";

const getData = () => {
  return JSON.parse(fs.readFileSync(path, "utf8"));
};

const writeData = (data: any) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

const writeLog = (message: string = "") => {
  const log = fs.readFileSync(logPath, "utf-8");
  fs.writeFileSync(
    logPath,
    JSON.stringify(log + " \n" + new Date() + " \n" + message)
  );
};

const getExpenses = (id?: number) => {
  if (id) {
    return getData().expenses.find((exp: IExpense) => exp.id === id) ?? {};
  }
  return getData().expenses as IExpenses;
};

const addExpense = (data: IExpense) => {
  console.log(getData());
  const expenses = getData().expenses;
  console.log(getData(), expenses);
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

type totalParams = {
  type?: "date" | "category";
  params?: any;
};

const totalExpense = ({ type, params }: totalParams = {}) => {
  const expenses = getData().expenses;
  let totalExpense = 0;
  expenses
    .filter(
      (x: IExpense) =>
        x.type === "expense" &&
        (type
          ? type === "date"
            ? x.date >= params.start && x.date <= params.end
            : x.category === params
          : true)
    )
    .map((exp: IExpense) => {
      totalExpense += exp.nominal;
    });
  return totalExpense;
};

const calcExpense = () => {
  const expenses = getData().expenses;
  let totalIncome = 0;
  expenses
    .filter((x: IExpense) => x.type === "income")
    .map((exp: IExpense) => {
      totalIncome += exp.nominal;
    });
  let totalExpense = 0;
  expenses
    .filter((x: IExpense) => x.type === "expense")
    .map((exp: IExpense) => {
      totalExpense += exp.nominal;
    });
  return totalIncome - totalExpense;
};

export const expenseData = {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  totalExpense,
};
