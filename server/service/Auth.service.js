const bcrypt = require('bcrypt');

const saltRound = 10;

class Auth {
  static async getHash(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, saltRound);
    return hash;
  }

  static async isPasswordValid(plainPassword, hash) {
    const isValid = await bcrypt.compare(plainPassword, hash);
    return isValid;
  }
}

module.exports = Auth;
