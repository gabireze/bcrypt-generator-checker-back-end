const bcrypt = require("bcrypt");

class BcryptGeneratorCheckerService {
  async hash(myPlaintextPassword, saltRounds) {
    try {
      const hash = bcrypt.hash(myPlaintextPassword, saltRounds);
      return hash;
    } catch (error) {
      throw error;
    }
  }

  async compare(myPlaintextPassword, hash) {
    try {
      const match = bcrypt.compare(myPlaintextPassword, hash);
      return match;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new BcryptGeneratorCheckerService();
