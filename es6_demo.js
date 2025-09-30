// 1. let / const
let name = "Vy";
const age = 21;
console.log("Name:", name, "| Age:", age);

// 2. Arrow function
const greet = (user) => `Hello ${user}!`;
console.log(greet("Vy"));

// 3. Destructuring
const student = { id: 1, fullname: "Nguyen Van A", gpa: 3.2 };
const { id, fullname } = student;
console.log("ID:", id, "| Fullname:", fullname);

// 4. Template literals
console.log(`My name is ${fullname} and I am ${age} years old.`);

// 5. Async/Await with Promise
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Data loaded successfully!"), 1000);
  });
};

(async () => {
  const result = await fetchData();
  console.log(result);
})();
