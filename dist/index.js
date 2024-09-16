"use strict";
// // interface User {
// //     id: string;
// //     name: string;
// //     age: string;
// //     email: string;
// //     password: string;
// // };
const users = {
    "abc123": { age: 23, name: "John Doe" },
    "xyz789": { age: 34, name: "Jane Doe" },
};
console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }
users["abc123"].age;
