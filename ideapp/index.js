
// GET /ideas_app/v1/ideas/1 
// PUT /ideas_app/v1/ideas/1 
// DELETE /ideas_app/v1/ideas/1

const express = require("express");
const app = express();

const PORT = 3000;

// 🔥 THIS LINE WAS MISSING
const idea_route = require("./routers/ideas.routes");

app.use(express.json());

// Bring morgan  into use
const morgan = require('morgan');
app.use(morgan('dev'));

app.use("/ideas_app/v1", idea_route);

app.listen(PORT, () => {
  console.log(`Server started running on port num : ${PORT}`);
});