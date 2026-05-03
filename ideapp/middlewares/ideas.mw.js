exports.validate_POST_req_body = (req, res, next) => {
  const req_obj = req.body;

  if (!req_obj["idea_name"]) {
    return res.status(400).send({
      message: `"idea_name" field missing`
    });
  }

  if (!req_obj["author_name"]) {
    return res.status(400).send({
      message: `"author_name" field missing`
    });
  }

  if (!req_obj["idea_description"]) {
    return res.status(400).send({
      message: `"idea_description" field missing`
    });
  }

  next(); // ✔ MUST be inside function
};



// exports.validate_PUT_req_body = (req, res, next) => {
//   const req_obj = req.body;

//   if (!req_obj["id"]) {
//     return res.status(400).send({
//       message: `"id" field missing in body`
//     });
//   }

//   if (req_obj["id"] != req.params.id) {
//     return res.status(400).send({
//       message: `ID mismatch: body id ${req_obj["id"]} != param id ${req.params.id}`
//     });
//   }

//   if (!req_obj["idea_name"]) {
//     return res.status(400).send({
//       message: `"idea_name" missing`
//     });
//   }

//   if (!req_obj["author_name"]) {
//     return res.status(400).send({
//       message: `"author_name" missing`
//     });
//   }

//   if (!req_obj["idea_description"]) {
//     return res.status(400).send({
//       message: `"idea_description" missing`
//     });
//   }

//   next();
// };