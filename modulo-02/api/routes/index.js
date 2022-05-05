const express = require("express");
const merchants = require("./merchantsRoute");

// interessante!
module.exports = (app) => {
  app.use(express.json({ limit: "10mb" }), merchants);
};
