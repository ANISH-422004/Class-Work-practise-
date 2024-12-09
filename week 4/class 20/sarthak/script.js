var h1 = React.createElement(
    'h1',
    { style: { color: 'red', fontFamily: 'sans-serif' ,}, id: 'h1text' },
    'Hello, React!'
  );
  
var div = React.createElement('div', {id : "container" , style:{display : "flex"} } , [h1,h1,h1,h1])
// console.log(h1);

const root =  ReactDOM.createRoot(document.querySelector('main'));
// console.log(root) 

root.render(div)




//In React, React.createElement() is a method used to create React elements. It is the foundation of JSX, the syntax you typically use in React for writing UI components.

// Syntax:
// javascript
//  Copy code
// React.createElement(
//   type,
//   [props],
//   [...children]
// );
// Parameters:
// type:

// The type of element to create.
// It can be a:
// String: For HTML tags (e.g., 'div', 'span').
// Component: For React components (e.g., MyComponent).
// props:

// An object containing the attributes or properties you want to pass to the element (e.g., id, className, onClick).
// Can be null or an empty object if no props are needed.
// children:

// The child elements or content to be nested inside the created element.
// Can be:
// Strings: For text content.
// React elements: For nested components.
// Arrays: For multiple children.
// Example 1: Without JSX
// javascript
// Copy code
// const element = React.createElement(
//   'div', 
//   { className: 'container', id: 'main' }, 
//   'Hello, React!'
// );
// console.log(element);
// This produces:

// javascript
// Copy code
// {
//   type: "div",
//   props: {
//     className: "container",
//     id: "main",
//     children: "Hello, React!"
//   }
// }
// Example 2: With Nested Elements
// javascript
// Copy code
// const nestedElement = React.createElement(
//   'div',
//   { className: 'wrapper' },
//   React.createElement('h1', null, 'This is a header'),
//   React.createElement('p', null, 'This is a paragraph')
// );
// This generates a structure equivalent to:

// jsx
// Copy code
// <div className="wrapper">
//   <h1>This is a header</h1>
//   <p>This is a paragraph</p>
// </div>
// JSX Equivalent
// Using JSX, the same code would look like this:

// jsx 
// Copy code
// const element = (
//   <div className="container" id="main">
//     Hello, React!
//   </div>
// );
// Key Points:
// Why use React.createElement()?

// It is the lower-level API that JSX gets compiled into.
// Understanding it helps you grasp how JSX works under the hood.
// Performance:

// React doesn’t use document.createElement() directly for each render.
// Instead, it uses the Virtual DOM for efficient updates.
// No JSX Environment:

// If you’re not using a transpiler like Babel or working in a minimal setup, you can directly use React.createElement().
// Let me know if you'd like further details or practical examples!






// You said:
// react.root()
// ChatGPT said:
// ChatGPT
// In React, ReactDOM.createRoot() is a method introduced with React 18 that provides a way to initialize and manage the root of your React application. This method is part of the new Concurrent Mode features, offering improved rendering performance and capabilities.

// Syntax:
// javascript
// Copy code
// const root = ReactDOM.createRoot(container);
// Parameters:
// container: The DOM element where the React app will be mounted. Typically, this is a <div> element in your index.html file.
// Key Features:
// Concurrent Mode Support:

// Enables React to interrupt rendering and prioritize urgent updates like user interactions.
// Helps avoid blocking the main thread during long rendering tasks.
// Better Updates:

// createRoot provides methods to manage updates more effectively, including the render method for initial and subsequent updates.
// Modern API:

// It's the preferred way to initialize React apps in React 18 and beyond.
