// File System
var fs = require('fs') // built in mobule
try {
  // Read File
  const data =fs.readFileSync('rameshwar.txt','utf8');
  console.log("File Content : ", data)

  // Create File
  const dt = fs.writeFileSync("test.txt" , "rs")
  console.log("File Content : ", dt)
 

} catch (error) {
  console.log("Error reading file synchronously : ",error)
}
