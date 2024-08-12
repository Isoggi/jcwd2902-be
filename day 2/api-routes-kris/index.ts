import express from "express";
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded);

app.get("/", (req, res) => {
  res.send("Day 2 API Routes!");
});

app.get("/about", (req, res) => {
  res.send("About!");
});
app.get(/a/, (req, res) => {
  res.send("Anything with a in their word !");
});

app.get(/.*fly$/, (req, res) => {
  res.send("Anything ends with fly!");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
