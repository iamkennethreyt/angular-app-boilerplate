const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => res.send("./public/index.html"));

app.listen(8080, () => console.log(`App listening on port 8080`));
