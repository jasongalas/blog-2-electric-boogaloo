const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const theDate = require("../utils/date");

class Blog extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Blog.init(
  {
    id: {
      type: DataTypes.UUID.V4,
      defaultValue: sql.uuidV4,
      allowNull: false,
      primaryKey: true
    },
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = User;
