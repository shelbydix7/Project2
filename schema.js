const schema = require("schm");

const Scores = schema(
  {
    name: { type: String, exclaim: true },
    age: Number,
    city: String,
    gender: String,

  }, 
 
);

Scores.parse({
  name: "",
  age: "",
  city: "",
  gender: "",
});