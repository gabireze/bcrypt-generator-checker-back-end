"use strict";
const BcryptGeneratorCheckerService = require("../services/bcrypt-generator-checker");

class BcryptGeneratorCheckerController {
  async hash(request, response, next) {
    try {
      const { saltRounds } = request.body;
      const { myPlaintextPassword } = request.body;
      const result = await BcryptGeneratorCheckerService.hash(myPlaintextPassword, saltRounds);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }

  async compare(request, response, next) {
    try {
      const { myPlaintextPassword } = request.body;
      const { hash } = request.body;
      const result = await BcryptGeneratorCheckerService.compare(myPlaintextPassword, hash);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}

module.exports = new BcryptGeneratorCheckerController();
