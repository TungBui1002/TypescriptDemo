"use strict";
var User = {
    name: "Tungb",
    age: 22,
    id: 101,
    email: "tungb@gmail.com"
};
console.log(User);
let employee = {
    name: "Tungb",
    age: 22,
    id: 101,
    email: "tungb@gmail.com",
    salary: 10000
};
console.log(employee);
class UserLogin {
    constructor() {
        this.users = [
            {
                name: "Tungb",
                age: 22,
                id: 101,
                email: "tungb@gmail.com"
            }
        ];
    }
    login(username, password) {
        // Giả lập kiểm tra đăng nhập
        // Trong thực tế, bạn sẽ kiểm tra với database hoặc API
        if (username === "tungb" && password === "123456") {
            return this.users[0];
        }
        return null;
    }
}
// Tạo instance và sử dụng
const userLogin = new UserLogin();
// Thử đăng nhập thành công
const loggedInUser = userLogin.login("tungb", "123456");
if (loggedInUser) {
    console.log("Đăng nhập thành công:", loggedInUser);
}
else {
    console.log("Đăng nhập thất bại");
}
// Thử đăng nhập thất bại
const failedLogin = userLogin.login("tungb", "wrong");
if (failedLogin) {
    console.log("Đăng nhập thành công:", failedLogin);
}
else {
    console.log("Đăng nhập thất bại");
}
//# sourceMappingURL=interface.js.map