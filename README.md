# vietprodev-challenges

# challenge 1
Entity: Users, User_Auth, Roles, Courses, Classes, Enrollments và các bảng phụ nếu cần.
Tạo init.sql: script tạo bảng, khóa chính/ngoại, ràng buộc, index,...
Vẽ sơ đồ ERD (erd.png) bằng Draw.io
Tài liệu database_analysis.md: mô tả database
Dữ liệu mẫu (sample_data.sql): ~10 bản ghi/bảng
Chuẩn hóa 3NF, toàn vẹn dữ liệu
Tạo dự án Back-End, kết nối Database, cấu hình tự động sinh Entities/Models từ Database cho dự án. (.NET: scaffold, Node: sequelize-auto)


# challenge 2
Entity: Courses, Classes
API Courses: create, read, update, delete
API Classes: create, read, update, delete
Validator
Try-catch: xử lý lỗi
Response: chuẩn JSON, status (success/error), violations cho lỗi
Logging: log API calls, errors


# challenge 3
API: register, login, profile (GET)     //Đăng ký, đăng nhập, xem profile//
Register: lưu email, name, password_hash vào Users/User_Auth    //hasspass: bcrypt ****//
Bảo mật: hash mật khẩu (BCrypt: .NET BCrypt.Net, Node bcrypt), JWT (access token 1 giờ)   // access token trong 1 giờ 
Validator: email hợp lệ, password tối thiểu 6 ký tự     //set up validator(em tự cho thêm các ký tự đặc biệt và chữ in hoa) cho email và pass
Response: chuẩn JSON, violations cho lỗi (email trùng, password yếu)    setup vio cho email và pass
Try-catch: xử lý lỗi đăng ký/đăng nhập      // sử dụng async-handler 
Logging: log đăng ký/đăng nhập thất bại     // catch error đăng nhập thất bại
