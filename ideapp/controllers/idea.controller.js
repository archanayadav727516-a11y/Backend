

const ideas = require("../models/ideas.models");

let id = 3;

// GET all ideas
exports.getAllIdeas = (req, res) => {
  res.status(200).send(ideas);
};

// GET idea by id
exports.getAllIdeasBasedOnId = (req, res) => {
  const idea_id = Number(req.params.id);

  const idea = ideas.find(i => i.id === idea_id);
console.log(Array.isArray(ideas)); // false aayega
console.log(ideas);
  if (idea) {
    res.status(200).send(idea);
  } else {
    res.status(404).send({
      message: `Idea with id ${idea_id} is not present`
    });
  }
};

// CREATE idea
exports.createIdea = (req, res) => {
  try {
    id++;

    const idea_object = req.body;
    idea_object.id = id;

    ideas.push(idea_object);

    res.status(201).send({
      message: "Idea created successfully",
      data: idea_object
    });

  } catch (err) {
    res.status(500).send({
      message: "Server error",
      error: err.message
    });
  }
};
  

// Define the controller for updateing
exports.updateIdea = (req, res) => {
    // Convert id to number
    const idea_id = Number(req.params.id);

    // Find index based on id
    const index = ideas.findIndex(i => i.id === idea_id);

    // Check if found
    if (index !== -1) {

        // Update only provided fields
        ideas[index] = {
            ...ideas[index],
            ...req.body
        };

        res.status(200).send(ideas[index]);

    } else {
        res.status(404).send({
            message: `Idea does not exist for id ${idea_id}`
        });
    }
};

// controller for deleteing the idea based on the id

exports.deleteIdea = (req,res)=>{
     
    // fethc the idea id
    const idea_id = req.params.id;

    if(ideas[idea_id]){
        delete ideas[idea_id];
        res.status(200).send({
            massage : `Idea with the id : ${idea_id} is deleted`
        });
    }else{
        message : `Idea do not exist for the given requested id ${idea_id} `
    }

}
