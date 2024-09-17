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

// interface User {
//     id: string;
//     name: string;
//   }
  
//   // Initialize an empty Map
//   const usersMap = new Map<string, User>();
  
//   // Add users to the map using .set
//   usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
//   usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
//   // Accessing a value using .get
//   console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }



// exclude 

// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent("click"); // OK

// Type inference in Zod

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1 ),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);