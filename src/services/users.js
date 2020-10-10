const models = require('../models');

class UserService {
  static async getUserById(id) {
    const user = await models.User.findByPk(id);
    return user
  }

  static async createUser(id, firstName, lastName, email) {
    return await models.User.create({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  }
}

module.exports = UserService;
