## 🔐 Role-Based Access Control (RBAC) in React Router

Implementing **Role-Based Access Control (RBAC)** ensures that users can only access the routes they are **authorized** to view. This is crucial for **multi-role applications** where different users (e.g., **Admin, Editor, User**) have different levels of access.

---

## 🔥 How to Implement RBAC in React Router?

### 1️⃣ Define User Roles & Permissions
First, set up roles and permissions for different routes.

```js
const roles = {
  admin: ["dashboard", "settings", "users"],
  editor: ["dashboard", "settings"],
  user: ["dashboard"],
};
```

---

### 2️⃣ Create a Protected Route Component
This component will **restrict access** based on the user's role.

```js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, userRole, children }) =>
  allowedRoles.includes(userRole) ? children : <Navigate to="/unauthorized" replace />;
```

---

### 3️⃣ Use `ProtectedRoute` in React Router
Define routes and assign **allowed roles**.

```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Unauthorized from "./pages/Unauthorized";

const user = { role: "editor" }; // Example user (Replace with real auth logic)

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {/* Role-based access control */}
      <Route
        path="/users"
        element={
          <ProtectedRoute allowedRoles={roles.admin} userRole={user.role}>
            <Users />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute allowedRoles={[...roles.admin, ...roles.editor]} userRole={user.role}>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  </Router>
);

export default App;
```

---

## 🎯 How This Works?
- `ProtectedRoute` checks if `user.role` is in `allowedRoles`.
- If **allowed**, it renders the component.
- If **not allowed**, it redirects to an **unauthorized page**.
- This ensures **secure navigation** based on user roles.

---

## 🚀 Advanced: Redirect Unauthorized Users to Login
Modify `ProtectedRoute` to redirect users to `/login` if not authenticated.

```js
const ProtectedRoute = ({ allowedRoles, userRole, children }) => {
  if (!userRole) return <Navigate to="/login" replace />;
  return allowedRoles.includes(userRole) ? children : <Navigate to="/unauthorized" replace />;
};
```

---

## ✅ Benefits of Role-Based Routing
✔ **Prevents unauthorized access**  
✔ **Scalable & easy to manage roles**  
✔ **Enhances security for multi-user apps**  

This approach ensures that **only authorized users** can access specific pages, making your React app **secure & scalable**. 🚀

