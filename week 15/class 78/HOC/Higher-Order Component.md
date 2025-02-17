# Higher-Order Component (HOC) for Authentication in React

## **What is a Higher-Order Component (HOC)?**
A **Higher-Order Component (HOC)** is an advanced technique in React for reusing component logic. It is a **function** that takes a component as an argument and returns a **new component** with additional functionality.

### **Why Use HOCs?**
- **Code Reusability**: Share logic across multiple components without duplication.
- **Separation of Concerns**: Keeps authentication, logging, and other logic separate from UI.
- **Enhancing Components**: Can modify or inject props into components dynamically.

## **Example of a Simple HOC**
Let’s create a simple HOC that adds additional styling to any component.

```jsx
import React from 'react';

const withBorder = (WrappedComponent) => {
  return (props) => (
    <div style={{ border: '2px solid red', padding: '10px' }}>
      <WrappedComponent {...props} />
    </div>
  );
};

const Message = ({ text }) => <p>{text}</p>;

const BorderedMessage = withBorder(Message);

export default function App() {
  return <BorderedMessage text="Hello, this is a bordered message!" />;
}
```

### **How it Works:**
1. `withBorder` is an HOC that wraps `WrappedComponent` inside a `div` with a red border.
2. `Message` is a normal functional component.
3. `BorderedMessage` is the enhanced component created using `withBorder`.
4. `BorderedMessage` receives and passes all props to `Message` while adding additional styling.

## **Implementation of `WithAuth` (HOC for Authentication)**
Now, let's implement `WithAuth`, which protects a component by checking user authentication.

```jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../views/Loader/Loader";
import { FaInstagram } from "react-icons/fa";

const WithAuth = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log("Token being sent:", token);

      if (!token || token.trim() === "") {
        setIsAuthorized(false);
        return;
      }

      axios
        .get("http://localhost:3000/users/authenticate", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Authentication Response:", response.data);
          setIsAuthorized(response.data.message === "Authenticated");
        })
        .catch((error) => {
          console.error("Authentication Error:", error.response?.data || error);
          setIsAuthorized(false);
        });
    }, []);

    if (isAuthorized === null) {
      return <Loader />;
    }

    if (!isAuthorized) {
      return (
        <div className="unauthorized w-full h-screen flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl">Unauthorized! Please log in.</h1>
          <button
            onClick={() => navigate('/login')}
            className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-md hover:opacity-90 transition duration-300"
          >
            <FaInstagram className="text-xl" />
            Sign in with Instagram
          </button>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
```

## **Usage Example**

Now, let's use this HOC to **protect a Dashboard component**.

### `Dashboard.js`
```jsx
import React from "react";

const Dashboard = ({ userData }) => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Welcome, {userData.name}!</h1>
      <p>Your email: {userData.email}</p>
    </div>
  );
};

export default Dashboard;
```

### **Wrapping `Dashboard` with `WithAuth`**
In order to protect `Dashboard`, we wrap it with `WithAuth` before exporting it.

```jsx
import WithAuth from "../hoc/WithAuth";
import Dashboard from "./Dashboard";

export default WithAuth(Dashboard);
```

Now, whenever a user tries to access `Dashboard`, they will be **redirected** to login if they are not authenticated. If authenticated, they will see the Dashboard.

## **How It Works**
1. `WithAuth` checks for a stored authentication token in `localStorage`.
2. It sends the token to an authentication endpoint.
3. If the response confirms authentication, it renders `WrappedComponent` (e.g., `Dashboard`).
4. If unauthorized, it shows a **login prompt** and a button to navigate to the login page.
5. If authentication is still in progress, a `Loader` is shown.

## **More Examples of HOCs**

### **HOC for Logging Props**
```jsx
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props received:", props);
    return <WrappedComponent {...props} />;
  };
};

const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
const LoggedGreeting = withLogger(Greeting);

export default function App() {
  return <LoggedGreeting name="Alice" />;
}
```

## **Conclusion**
Using a **Higher-Order Component (HOC)** like `WithAuth` helps in handling authentication efficiently across multiple components without duplicating authentication logic. You can now use `WithAuth` to protect other components like `Profile`, `Settings`, etc., by simply wrapping them before export:

```jsx
export default WithAuth(Profile);
```

This approach makes authentication handling reusable, clean, and scalable! 🚀

