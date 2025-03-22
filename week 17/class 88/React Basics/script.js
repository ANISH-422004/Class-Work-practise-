// // element creation using React.createElement
// let h1 = React.createElement("h1", {
//     style: { color: " red", backgroundColor: "black" },
//     className: "heading",
//     id: "heading1",
// }, "Hello World");

// // selecting the root element
// const Root = ReactDOM.createRoot(document.querySelector("#root"));


// // rendering the element
// Root.render(h1);


////////////////////////////// Nested Elements //////////////////////////////

// const parent = React.createElement(
//     'div', { id: 'parent' },
//     React.createElement(
//       'div', { id: 'child' },
//       React.createElement('h1', {}, 'This is an H1 tag inside a child div')
//     )
//   );
// const root = ReactDOM.createRoot(document.querySelector("#root"));

//   root.render(parent);


///////////////////////////Sibling Elements//////////////////////////////

// const parent = React.createElement(
//     'div', { id: 'parent', style: { backgroundColor: "red", padding: "10px" } },
//     React.createElement('h1', { style: { backgroundColor: "blue" } }, 'This is an H1 tag'),
//     React.createElement('h2', { style: { backgroundColor: "orange" } }, 'This is an H2 tag')
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(parent);