    # Understanding `useMemo` and `useCallback` in React

## `useMemo`

### Explanation:

`useMemo` is a React Hook used to optimize performance by memoizing expensive calculations. It prevents unnecessary recalculations by returning a cached value unless its dependencies change.

### Syntax:

```jsx
import React, { useState, useMemo } from "react";

const ExpensiveCalculation = ({ num }) => {
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return num * num;
  }, [num]);

  return <p>Square: {squaredNumber}</p>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  return (
    <div>
      <h1>useMemo Example</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <ExpensiveCalculation num={num} />
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
    </div>
  );
};

export default App;
```

### When to Use `useMemo`?

- When performing expensive calculations inside a component.
- When filtering or sorting large lists.
- When working with derived state that is costly to compute.

---

## `useCallback`

### Explanation:

`useCallback` is a React Hook that memoizes function instances to prevent unnecessary re-creation on every render. It ensures that a function reference remains the same unless its dependencies change.

### Syntax:

```jsx
import React, { useState, useCallback } from "react";
import Navbar from "./Navbar";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <Navbar handleClick={handleClick} />
    </div>
  );
};

export default App;
```

### When to Use `useCallback`?

- When passing functions to child components to prevent unnecessary re-renders.
- When working with event listeners or handlers that should not be recreated.
- When optimizing performance in React applications with memoized components.

---

## Interview Questions

### When to Use `useMemo`

- To optimize expensive calculations.
- When dealing with large lists that require filtering, sorting, or transformations.
- Preventing unnecessary computations on every render.

### Interview Questions on `useMemo`

1. **What is `useMemo`, and how does it help in performance optimization?**

   - `useMemo` memoizes the result of a function and only recalculates when dependencies change, reducing unnecessary re-executions.

2. **Can `useMemo` replace `useState` for storing computed values?**

   - No, `useMemo` only memoizes a value; it does not persist it between renders like `useState` does.

3. **What happens if the dependency array is empty in `useMemo`?**

   - The memoized value is computed once and never updated again.

4. **What are some real-world use cases for `useMemo`?**

   - Memoizing expensive calculations, optimizing large data processing, and preventing unnecessary re-renders in component lists.

5. **How does `useMemo` compare to normal function calls?**
   - A normal function executes on every render, while `useMemo` caches the result until dependencies change, improving performance.

### When to Use `useCallback`

- When passing functions as props to child components to prevent unnecessary re-renders.
- Optimizing event handlers in performance-sensitive applications.

### Interview Questions on `useCallback`

1. **What is `useCallback`, and why do we use it?**

   - `useCallback` memoizes a function reference, preventing unnecessary re-creations on every render.

2. **How does `useCallback` help in optimizing React applications?**

   - It prevents unnecessary re-renders in components that rely on function references (e.g., child components wrapped in `React.memo`).

3. **What happens if we don't use `useCallback` for functions in child components?**

   - The child component may re-render unnecessarily because the parent generates a new function reference on every render.

4. **How is `useCallback` different from `useMemo`?**

   - `useMemo` memoizes the result of a function, while `useCallback` memoizes the function itself.

5. **Can `useCallback` be used inside event handlers? Why or why not?**
   - Yes, but it is only beneficial when the handler function is passed as a prop to other components to avoid unnecessary re-creations.

---

## Summary

- `useMemo`: Memoizes **values** to optimize expensive computations.
- `useCallback`: Memoizes **functions** to prevent unnecessary re-creations.

---

By mastering these hooks, developers can enhance performance and optimize re-renders in React applications effectively!
