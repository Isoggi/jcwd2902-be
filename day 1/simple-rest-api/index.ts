import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 3000;

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/api" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write("Hello there, this is a nodeJS API");
      res.end();
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Wrong URL");
    }
  }
);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
