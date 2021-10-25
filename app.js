const express = require("express");
const app = express();
const port = process.env.PORT || 8080;




// listen step
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
