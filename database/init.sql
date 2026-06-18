CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE "Authentication" (
    auth_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,

    CONSTRAINT fk_auth_user FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE "Authorization" (
    authorization_id SERIAL PRIMARY KEY,
    auth_id INT NOT NULL,
    role_id INT NOT NULL,

    CONSTRAINT fk_authorization_auth FOREIGN KEY (auth_id) REFERENCES "Authentication"(auth_id),
    CONSTRAINT fk_authorization_role FOREIGN KEY (role_id) REFERENCES Roles(role_id)
);

CREATE TABLE Courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE Classes (
    class_id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    class_name VARCHAR(255) NOT NULL,

    CONSTRAINT fk_class_course FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    class_id INT NOT NULL,
    course_id INT NOT NULL,

    CONSTRAINT fk_enrollment_user
        FOREIGN KEY (user_id)
        REFERENCES Users(user_id),

    CONSTRAINT fk_enrollment_class
        FOREIGN KEY (class_id)
        REFERENCES Classes(class_id),

    CONSTRAINT fk_enrollment_course
        FOREIGN KEY (course_id)
        REFERENCES Courses(course_id)
);


-- USERS INDEX
CREATE INDEX idx_users_email ON Users(email);
CREATE INDEX idx_users_phone ON Users(phone_number);

-- AUTHENTICATION INDEX
CREATE INDEX idx_auth_user_id ON "Authentication"(user_id);
CREATE INDEX idx_auth_username ON "Authentication"(username);

-- ROLES INDEX
CREATE INDEX idx_roles_role_name ON Roles(role_name);

-- AUTHORIZATION INDEX (RBAC TABLE)
CREATE INDEX idx_authorization_auth_id ON "Authorization"(auth_id);
CREATE INDEX idx_authorization_role_id ON "Authorization"(role_id);

-- COURSES INDEX
CREATE INDEX idx_courses_course_name ON Courses(course_name);

-- CLASSES INDEX
CREATE INDEX idx_classes_course_id ON Classes(course_id);

-- ENROLLMENTS INDEX
CREATE INDEX idx_enrollments_user_id ON Enrollments(user_id);
CREATE INDEX idx_enrollments_class_id ON Enrollments(class_id);
CREATE INDEX idx_enrollments_course_id ON Enrollments(course_id);

