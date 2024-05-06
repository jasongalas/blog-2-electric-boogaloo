const { Model, DataTypes } = require('sequelize');
const  sequelize  = require('../config/connection.js');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    blogId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'blog',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: true,
    modelName: 'comment',
    freezeTableName: true
});

module.exports = Comment;