const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses', {
    course_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'courses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "courses_pkey",
        unique: true,
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "idx_courses_course_name",
        fields: [
          { name: "course_name" },
        ]
      },
    ]
  });
};
