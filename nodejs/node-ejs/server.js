const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver com EJS e massa!"
    },
    {
      title: "E",
      message: " fácil de usar"
    },
    {
      title: "M",
      message: "uito bom para o dia a dia"
    },
    {
      title: "A",
      message: "gil no seu cotidiano"
    },
    {
      title: "I",
      message: "nstall EJS!"
    },
    {
      title: "S",
      message: "uper poderoso!!!"
    },
  ];

  const subtitle = "Uma linguagem de modelagem para criação de paginas HTML"
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("Start!")