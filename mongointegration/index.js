
// // logic to connect with mongidb

// const mongoose = require("mongoose");
// require("dotenv").config();

// const Student = require("./models/student.model");

// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("MongoDB connection is success");

//     // Delete all documents
//     const delObj = await Student.deleteMany({});
//     console.log("Deleted:", delObj);

//     // Insert new record
//     const student = await Student.create({ name: "vishwa", age: 21 });
//     console.log("Inserted:", student);

//   } catch (err) {
//     console.log("Mongo Error", err);
//   } finally {
//     await mongoose.disconnect();
//     console.log("Disconnected");
//   }
// })();
// //  insert multiple records in the given Student.collection
// const student = await Student.insertMany([
//   {name:"vishwa",age:21},
//    {name:"mohan",age:22},
//    {name: "shivani",age:25}
// ]);
// console.log(student);



const mongoose = require("mongoose");
require("dotenv").config();

const Student = require("./models/student.model");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connection is success");

    // Delete all documents
    const delObj = await Student.deleteMany({});
    console.log("Deleted:", delObj);

    // Insert single record
    const student1 = await Student.create({ name: "vishwa", age: 21 });
    console.log("Inserted One:", student1);

    // ✅ Insert multiple records (INSIDE async function)
    const students = await Student.insertMany([
      { name: "vishwa", age: 21 },
      { name: "mohan", age: 22 },
      { name: "shivani", age: 25 }
    ]);

    console.log("Inserted Many:", students);

    // find the count of document inside the 'student' collection 

const std_count = await Student.countDocuments();
console.log(std_count);
// Search a document based on the name
const obj = await Student.findOne({name:"vishwa"});
console.log(obj);

  } catch (err) {
    console.log("Mongo Error", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected");
  }
})();

