const express = require("express");
const app = express();
const port = 3099;

app.get("/", (req, res) => {
    res.send("<h1>Welcome!</h1>");
});

app.get("/finalTest", (req, res) => {
    res.send("<p>Nonthakorn Krongkraijak 6604305001342<br> Natthawat Hiranruang 6604305001346</p>");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
