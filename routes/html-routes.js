/* eslint-disable linebreak-style */
module.exports = function(app) {
  //Home Page Route
  app.get("/", function(req, res) {
    res.render("index");
  });

  //Contact Page Route
  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  //Portfolio Page Route
  app.get("/portfolio", function(req, res) {
    res.render("portfolio");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
