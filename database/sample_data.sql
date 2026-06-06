-- ======================
-- USERS (10 records)
-- ======================
INSERT INTO Users (full_name, email, phone_number) VALUES
('Nguyen Van A', 'a@gmail.com', '0900000001'),
('Tran Thi B', 'b@gmail.com', '0900000002'),
('Le Van C', 'c@gmail.com', '0900000003'),
('Pham Thi D', 'd@gmail.com', '0900000004'),
('Hoang Van E', 'e@gmail.com', '0900000005'),
('Nguyen Thi F', 'f@gmail.com', '0900000006'),
('Tran Van G', 'g@gmail.com', '0900000007'),
('Le Thi H', 'h@gmail.com', '0900000008'),
('Pham Van I', 'i@gmail.com', '0900000009'),
('Ho Thi K', 'k@gmail.com', '0900000010');

-- ======================
-- USER AUTH (10 records)
-- ======================
INSERT INTO Authentication (user_id, username, password_hash) VALUES
(1,'user_a','hash1'),
(2,'user_b','hash2'),
(3,'user_c','hash3'),
(4,'user_d','hash4'),
(5,'user_e','hash5'),
(6,'user_f','hash6'),
(7,'user_g','hash7'),
(8,'user_h','hash8'),
(9,'user_i','hash9'),
(10,'user_k','hash10');

-- ======================
-- ROLES
-- ======================
INSERT INTO Roles (role_name) VALUES
('admin'), ('teacher'), ('student');

-- ======================
-- AUTHORIZATION (RBAC)
-- ======================
INSERT INTO Authorization (auth_id, role_id) VALUES
(1,1),
(2,2),
(3,3),
(4,3),
(5,3),
(6,3),
(7,2),
(8,3),
(9,3),
(10,3);

-- ======================
-- COURSES
-- ======================
INSERT INTO Courses (course_name, description) VALUES
('Backend NodeJS', 'Learn backend with NodeJS'),
('Database Design', 'Learn database design'),
('Web Development', 'Frontend + Backend basic'),
('API Design', 'REST API fundamentals'),
('System Design', 'High level architecture');

-- ======================
-- CLASSES
-- ======================
INSERT INTO Classes (course_id, class_name) VALUES
(1,'NodeJS A1'),
(1,'NodeJS A2'),
(2,'DB A1'),
(2,'DB A2'),
(3,'Web A1'),
(4,'API A1'),
(5,'System A1'),
(3,'Web A2'),
(4,'API A2'),
(5,'System A2');

-- ======================
-- ENROLLMENTS
-- ======================
INSERT INTO Enrollments (user_id, class_id, course_id) VALUES
(1,1,1),
(2,1,1),
(3,2,1),
(4,3,2),
(5,3,2),
(6,4,2),
(7,5,3),
(8,6,4),
(9,7,5),
(10,8,3);