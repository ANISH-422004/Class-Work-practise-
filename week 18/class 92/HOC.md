Higher-Order Components (HOC) in React
A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new enhanced component. It allows code reuse, abstraction, and logic sharing across multiple components in React.

🔥 When to Use HOCs?
✅ Enhancing components with additional props or behavior.
✅ Code reusability to avoid duplication.
✅ Encapsulating logic such as authentication, permissions, or fetching data.

🔥 Example 1: Authentication HOC (with children)
A HOC that checks authentication before rendering its children.

jsx
Copy
Edit
import { Navigate } from "react-router-dom";

const AuthGuard = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Usage
const Dashboard = () => <h1>Dashboard</h1>;

const App = () => {
  const isAuthenticated = localStorage.getItem("token"); // Example auth check

  return (
    <AuthGuard isAuthenticated={isAuthenticated}>
      <Dashboard />
    </AuthGuard>
  );
};

export default App;
🔹 How it works?

AuthGuard receives isAuthenticated and children.

If authenticated, it renders children (wrapped components).

Otherwise, it redirects to /login.

🔥 Example 2: Data Fetching HOC (with children)
A HOC that fetches data and provides it to the child component.

jsx
Copy
Edit
import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data ? children(data) : <p>Loading...</p>;
};

// Usage
const UsersList = (data) => (
  <ul>
    {data.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

const App = () => (
  <DataFetcher url="https://jsonplaceholder.typicode.com/users">
    {(data) => <UsersList {...data} />}
  </DataFetcher>
);

export default App;
🔹 How it works?

DataFetcher fetches data and passes it to children.

The UsersList component gets the fetched data and renders it dynamically.

✅ Why Use { children } in HOCs?
✔ Makes HOCs more flexible—any component can be wrapped inside.
✔ No need to pass wrapped components explicitly—just use { children }.
✔ Works with React Router and other UI structures.

This approach ensures cleaner, reusable, and scalable HOCs! 🚀 Let me know if you need more refinements. 🔥




📌 Example 1: Authentication HOC (with children)

A HOC that checks authentication before rendering its children.

import { Navigate } from "react-router-dom";

const AuthGuard = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Usage
const Dashboard = () => <h1>Dashboard</h1>;

const App = () => {
  const isAuthenticated = localStorage.getItem("token"); // Example auth check

  return (
    <AuthGuard isAuthenticated={isAuthenticated}>
      <Dashboard />
    </AuthGuard>
  );
};

export default App;

🔹 How it works?

AuthGuard receives isAuthenticated and children.

If authenticated, it renders children (wrapped components).

Otherwise, it redirects to /login.

📌 Example 2: Data Fetching HOC (with children)

A HOC that fetches data and provides it to the child component.

import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data ? children(data) : <p>Loading...</p>;
};

// Usage
const UsersList = (data) => (
  <ul>
    {data.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

const App = () => (
  <DataFetcher url="https://jsonplaceholder.typicode.com/users">
    {(data) => <UsersList {...data} />}
  </DataFetcher>
);

export default App;

🔹 How it works?

DataFetcher fetches data and passes it to children.

The UsersList component gets the fetched data and renders it dynamically.




