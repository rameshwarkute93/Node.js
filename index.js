console.log("Main Node File")

let math = require("./math")  // import math.js  file  in index.js
math.sqr(5)
math.cube(2)
math.add(2,3)

let logic = require("./logic") // import logic.js file in index.js
logic.table(2)
logic.evenodd(2)