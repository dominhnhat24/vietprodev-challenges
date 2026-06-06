const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Authentication', {
    auth_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      },
      unique: "Authentication_user_id_key"
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "Authentication_username_key"
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Authentication',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Authentication_pkey",
        unique: true,
        fields: [
          { name: "auth_id" },
        ]
      },
      {
        name: "Authentication_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "Authentication_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "idx_auth_user_id",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idx_auth_username",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
