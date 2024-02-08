const express = require('express');
// create a new express powered server
const app = express();

const port = process.env.PORT || 5000;
// listen on the port specified by the environment
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
