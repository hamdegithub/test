console.clear();
require("dotenv").config();
const express = require("express");
const cors = require("cors"); //
const app = express();

const userRouter = require("./server/api/users/user.router");
const questionRouter = require("./server/api/question/question.router");
const answerRouter = require("./server/api/answer/answer.router");

app.use(cors()); //middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/question", questionRouter);
app.use("/api/answer", answerRouter);

app.listen(3306, () => console.log(`Listening at http://localhost:3306`)); //
