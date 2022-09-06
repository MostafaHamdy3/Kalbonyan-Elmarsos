// Webserver

const http = require("http");

const PORT = 3000;
const server = http.createServer();

const friends = [
  {
    id: 1,
    name: "Omar",
  },
  {
    id: 2,
    name: "Mostafa",
  },
  {
    id: 3,
    name: "Mohammed",
  },
];

server.on("request", (req, res) => {
  const itmes = req.url.split("/");

  if (req.method === "POST" && itmes[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log("Request: ", friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && itmes[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    //  res.writeHead(200, {
    //    "Content-Type": "application/json",
    //  });

    if (itmes.length === 3) {
      const friendIndex = +itmes[2];
      res.end(JSON.stringify(friends[friendIndex]));
    } else res.end(JSON.stringify(friends));
  } else if (req.method === "GET" && itmes[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Omar!</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
// 127.0.0.1 => localhost
