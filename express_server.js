const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  app.get('/', function(req, res) {
    var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
  
    res.render('pages/index', {
      mascots: mascots,
      tagline: tagline
    });
  });
  res.render("urls_index", templateVars);
});
<%- include('partials/_head') %>
<%- include('partials/_header') %>
<%- include('partials/_footer') %>