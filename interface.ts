interface User {
    name: string;
    age: number;
    id: number;
    email: string;

}

var User = {
    name: "Tungb",
    age: 22,
    id: 101,
    email: "tungb@gmail.com"
}

console.log(User);

interface Emloyees extends User {
    salary: number;
}

let employee: Emloyees = {
    name: "Tungb",
    age: 22,
    id: 101,
    email: "tungb@gmail.com",
    salary: 10000
}

console.log(employee);

interface Login {
    login(username: string, password: string): User | null;
}

class UserLogin implements Login {
    private users: User[] = [
        {
            name: "Tungb",
            age: 22,
            id: 101,
            email: "tungb@gmail.com"
        }
    ];

    login(username: string, password: string): User | null {
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
} else {
    console.log("Đăng nhập thất bại");
}

// Thử đăng nhập thất bại
const failedLogin = userLogin.login("tungb", "wrong");
if (failedLogin) {
    console.log("Đăng nhập thành công:", failedLogin);
} else {
    console.log("Đăng nhập thất bại");
}


