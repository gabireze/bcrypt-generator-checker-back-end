const express = require("express");
const BcryptGeneratorCheckerController = require("../controllers/bcrypt-generator-checker");
const router = express.Router();

router.post("/hash", BcryptGeneratorCheckerController.hash);
router.post("/compare", BcryptGeneratorCheckerController.compare);

module.exports = {
  routes: router,
};
