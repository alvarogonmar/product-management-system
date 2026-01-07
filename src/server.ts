import express from "express"

const server = express();

// Routing
server.get("/", (req, res) => {
    res.json("Hello, World!");
})

server.post("/", (req, res) => {
    res.json({"Hello, World!": "POST"});
})

server.put("/", (req, res) => {
    res.json({"Hello, World!": "PUT"});
})

server.patch("/", (req, res) => {
    res.json({"Hello, World!": "PATCH"});
})

server.delete("/", (req, res) => {
    res.json({"Hello, World!": "DELETE"});
});


export default server;