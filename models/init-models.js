var DataTypes = require("sequelize").DataTypes;
var _Authentication = require("./Authentication");
var _Authorization = require("./Authorization");
var _classes = require("./classes");
var _courses = require("./courses");
var _enrollments = require("./enrollments");
var _roles = require("./roles");
var _users = require("./users");

function initModels(sequelize) {
  var Authentication = _Authentication(sequelize, DataTypes);
  var Authorization = _Authorization(sequelize, DataTypes);
  var classes = _classes(sequelize, DataTypes);
  var courses = _courses(sequelize, DataTypes);
  var enrollments = _enrollments(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  Authorization.belongsTo(Authentication, { as: "auth", foreignKey: "auth_id"});
  Authentication.hasMany(Authorization, { as: "Authorizations", foreignKey: "auth_id"});
  enrollments.belongsTo(classes, { as: "class", foreignKey: "class_id"});
  classes.hasMany(enrollments, { as: "enrollments", foreignKey: "class_id"});
  classes.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(classes, { as: "classes", foreignKey: "course_id"});
  enrollments.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(enrollments, { as: "enrollments", foreignKey: "course_id"});
  Authorization.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(Authorization, { as: "Authorizations", foreignKey: "role_id"});
  Authentication.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasOne(Authentication, { as: "Authentication", foreignKey: "user_id"});
  enrollments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(enrollments, { as: "enrollments", foreignKey: "user_id"});

  return {
    Authentication,
    Authorization,
    classes,
    courses,
    enrollments,
    roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
