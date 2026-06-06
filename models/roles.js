const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "roles_role_name_key"
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_roles_role_name",
        fields: [
          { name: "role_name" },
        ]
      },
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "roles_role_name_key",
        unique: true,
        fields: [
          { name: "role_name" },
        ]
      },
    ]
  });
};
