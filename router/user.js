const express = require("express");
const USerController = require("../controllers/user");
const md_auth = require("../middlewares/aunthenticated");

const api = express.Router();

api.get("/user/me", [md_auth.asureAuth],USerController.getMe);

module.exports = api;