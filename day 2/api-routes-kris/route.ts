import { Router } from "express";
export const _router = Router();

_router.get("/", (req, res) => {
  res.send({ success: true, message: "profile kris" });
});

_router.post("/", (req, res) => {
  res.status(201).send({
    success: true,
    message: "Post profile",
  });
});
