const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enrollments', {
    enrollment_id: {
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
      }
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'classes',
        key: 'class_id'
      }
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'course_id'
      }
    }
  }, {
    sequelize,
    tableName: 'enrollments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enrollments_pkey",
        unique: true,
        fields: [
          { name: "enrollment_id" },
        ]
      },
      {
        name: "idx_enrollments_class_id",
        fields: [
          { name: "class_id" },
        ]
      },
      {
        name: "idx_enrollments_course_id",
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "idx_enrollments_user_id",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
