const express = require("express");
const  dotenv=require('dotenv')
const { chats } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const chat = chats.find((ele) => ele._id === req.params.id);
  res.send(chat);
});

const PORT = process.env.PORT || 5000

app.listen(5000, console.log("server started"));
