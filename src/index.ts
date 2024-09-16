// // interface User {
// //     id: string;
// //     name: string;
// //     age: string;
// //     email: string;
// //     password: string;
// // };

// // //pick
// // type UpdateProps = Pick<User, 'name' | 'age' | 'email'>


// // //partial
// // type UpdatePropsOptional = Partial<UpdateProps>

// // function updateUser(updatedProps: UpdatePropsOptional) {
// //     // hit the database tp update the user and perform some operations
// // }
// // updateUser({})


// // enforce no change
// // readonly

// interface Config {
//     readonly endpoint: string;
//     readonly apiKey: string;
//   }
  
//   const config: Readonly<Config> = {
//     endpoint: 'https://api.example.com',
//     apiKey: 'abcdef123456',
//   };
  
//   // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.


  
//   type Users = Record<string, {
//     age: number;
//     name: string;
//   }>;
  
//   const users: Users = {
//     "abc123": { age: 23, name: "John Doe"},
//     "xyz789": { age: 34, name: "Jane Doe"},
//   }
  
//   console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

//   users["abc123"].age;

interface User {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }