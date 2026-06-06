# ERD Design Analysis

## Overview

The online learning system requires the following core entities:

- Users
- User_Auth
- Roles
- Courses
- Classes
- Enrollments

In addition, two supporting entities were introduced:

- Authentication
- Authorization

These entities are used to separate authentication and authorization responsibilities within the system.

## Authentication

The Authentication entity is responsible for user identity verification and login-related information.

Main responsibilities:

- Store login credentials
- Manage user authentication
- Support future features such as password hashing, OTP verification (email or phone number), and login validation

## Authorization

The Authorization entity is responsible for managing user permissions and role assignments.

The reason for introducing this entity is that the system contains multiple roles:

- Admin
- Instructor
- Student

Authorization acts as an intermediate layer between authentication and roles, making permission management easier and more scalable.

## Roles

The Roles entity stores all system roles.

Examples:

- Admin: full system access
- Instructor: manage courses and classes
- Student: enroll and access courses

## Users

Stores user profile information.

Examples:

- Full name
- Email
- Phone number

## Courses

Stores course information created by instructors.

## Classes

Stores class instances belonging to a course.

A course can contain multiple classes.

## Enrollments

Stores enrollment records between users and classes.

This entity is used to track which users have registered for which classes.