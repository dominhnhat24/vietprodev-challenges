const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classes', {
    class_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'course_id'
      }
    },
    class_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'classes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "classes_pkey",
        unique: true,
        fields: [
          { name: "class_id" },
        ]
      },
      {
        name: "idx_classes_course_id",
        fields: [
          { name: "course_id" },
        ]
      },
    ]
  });
};
