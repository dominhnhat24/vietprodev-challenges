const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Authorization', {
    authorization_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    auth_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Authentication',
        key: 'auth_id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'role_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Authorization',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Authorization_pkey",
        unique: true,
        fields: [
          { name: "authorization_id" },
        ]
      },
      {
        name: "idx_authorization_auth_id",
        fields: [
          { name: "auth_id" },
        ]
      },
      {
        name: "idx_authorization_role_id",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
