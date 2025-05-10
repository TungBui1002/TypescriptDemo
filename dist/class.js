"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // Getter methods to access private properties
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getNameWithAddress() {
        return this.name + " => " + this.id;
    }
}
let john = new Employee(4128399, "Tungb", "Nhon Trach");
// These lines will cause errors because properties are private
// john.id = 41283;        // Error: Property 'id' is private
// john.name = "Tungb";    // Error: Property 'name' is private
// john.address = "Nhon Trach"; // Error: Property 'address' is private
// Instead, we can use getter methods
console.log("ID:", john.getId());
console.log("Name:", john.getName());
console.log("Address:", john.getAddress());
console.log("Name with Address:", john.getNameWithAddress());
//# sourceMappingURL=class.js.map