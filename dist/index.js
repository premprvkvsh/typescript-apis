"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
;
// Example usage
const result = sumOfAge({
    name: "prem",
    age: 23
}, {
    name: "kunal",
    age: 22
});
console.log(result); // Output: 41
