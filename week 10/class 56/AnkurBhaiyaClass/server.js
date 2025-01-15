const app = require("./src/app");

// Connect to the database
require("./src/db/db");

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
