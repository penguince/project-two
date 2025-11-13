// Sample deck data for testing and demonstration
export const sampleDecks = [
  {
    id: 1,
    name: "React Basics",
    cards: [
      { id: 1, front: "What is JSX?", back: "A syntax extension for JavaScript that looks like HTML." },
      { id: 2, front: "What hook manages state?", back: "useState." },
      { id: 3, front: "What is a component?", back: "A reusable piece of UI that can accept props and manage state." },
      { id: 4, front: "What are props?", back: "Data passed from parent to child components." },
      { id: 5, front: "What is the virtual DOM?", back: "A lightweight copy of the actual DOM that React uses for efficient updates." },
    ],
  },
  {
    id: 2,
    name: "JavaScript ES6",
    cards: [
      { id: 1, front: "What is arrow function syntax?", back: "const func = () => {} - shorter function syntax." },
      { id: 2, front: "What does spread operator do?", back: "...array - expands array elements or object properties." },
      { id: 3, front: "What is destructuring?", back: "const {name} = obj - extract values from arrays or objects." },
      { id: 4, front: "What is template literal?", back: "`Hello ${name}` - string interpolation with backticks." },
      { id: 5, front: "What is a Promise?", back: "An object representing eventual completion or failure of async operation." },
    ],
  },
  {
    id: 3,
    name: "SQL Fundamentals",
    cards: [
      { id: 1, front: "PRIMARY KEY", back: "Uniquely identifies each row in a table." },
      { id: 2, front: "FOREIGN KEY", back: "Links two tables together, references primary key of another table." },
      { id: 3, front: "SELECT statement", back: "Retrieves data from database: SELECT * FROM table;" },
      { id: 4, front: "JOIN operation", back: "Combines rows from two or more tables based on related column." },
      { id: 5, front: "WHERE clause", back: "Filters records based on specified conditions." },
    ],
  },
  {
    id: 4,
    name: "CSS Flexbox",
    cards: [
      { id: 1, front: "display: flex", back: "Enables flexbox layout on container." },
      { id: 2, front: "justify-content", back: "Aligns items along main axis (horizontal)." },
      { id: 3, front: "align-items", back: "Aligns items along cross axis (vertical)." },
      { id: 4, front: "flex-direction", back: "Defines direction of flex items: row or column." },
      { id: 5, front: "flex-wrap", back: "Controls whether items wrap to multiple lines." },
    ],
  },
  {
    id: 5,
    name: "Git Commands",
    cards: [
      { id: 1, front: "git init", back: "Initialize a new Git repository." },
      { id: 2, front: "git add .", back: "Stage all changes for commit." },
      { id: 3, front: "git commit -m", back: "Save staged changes with a message." },
      { id: 4, front: "git push", back: "Upload local commits to remote repository." },
      { id: 5, front: "git pull", back: "Download and merge changes from remote." },
    ],
  },
  {
    id: 6,
    name: "HTTP Status Codes",
    cards: [
      { id: 1, front: "200 OK", back: "Request succeeded, server returned requested data." },
      { id: 2, front: "404 Not Found", back: "Requested resource does not exist." },
      { id: 3, front: "500 Internal Server Error", back: "Server encountered an unexpected condition." },
      { id: 4, front: "401 Unauthorized", back: "Authentication required but not provided." },
      { id: 5, front: "201 Created", back: "Request succeeded and new resource was created." },
    ],
  },
  {
    id: 7,
    name: "Data Structures",
    cards: [
      { id: 1, front: "Array", back: "Ordered collection of elements, accessed by index." },
      { id: 2, front: "Stack", back: "LIFO (Last In First Out) data structure." },
      { id: 3, front: "Queue", back: "FIFO (First In First Out) data structure." },
      { id: 4, front: "Linked List", back: "Linear collection of nodes, each pointing to next." },
      { id: 5, front: "Hash Table", back: "Key-value pairs with fast lookup using hash function." },
    ],
  },
  {
    id: 8,
    name: "Python Basics",
    cards: [
      { id: 1, front: "def function():", back: "Defines a function in Python." },
      { id: 2, front: "list vs tuple", back: "Lists are mutable [], tuples are immutable ()." },
      { id: 3, front: "Dictionary", back: "Key-value pairs: {'key': 'value'}." },
      { id: 4, front: "List comprehension", back: "[x*2 for x in range(10)] - create lists concisely." },
      { id: 5, front: "with statement", back: "Context manager for automatic resource cleanup." },
    ],
  },
];

// Helper function to get random sample decks
export const getRandomDecks = (count = 3) => {
  const shuffled = [...sampleDecks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get deck by topic
export const getDeckByTopic = (topic) => {
  return sampleDecks.find(deck => 
    deck.name.toLowerCase().includes(topic.toLowerCase())
  );
};
