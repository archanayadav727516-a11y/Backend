

const express = require("express");
const route = express.Router();

const idea_controller = require("../controllers/idea.controller");
const idea_mw =require("../middlewares/ideas.mw");




route.get("/ideas", idea_controller.getAllIdeas);

// Route for fetching idea based the id

route.get("/ideas/:id", idea_controller.getAllIdeasBasedOnId);


// Route for creating a new idea

// route.post("/ideas/:id", idea_mw.validate_POST_req_body, idea_controller.createIdea);

route.put("/ideas/:id", idea_controller.updateIdea);
// Route updateing the existing idea
// route.put("/ideas/:id",idea_mw.validate_PUT_req_body, idea_controller.updateIdea);



// Route for deleteing the existing idea

route.delete("/ideas/:id",idea_controller.deleteIdea);
module.exports = route;