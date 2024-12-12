// In React, two-way data binding refers to a technique where changes in the UI are automatically reflected in the state, and changes in the state are automatically reflected in the UI. This concept is commonly used in form elements like input fields to keep the React component's state and the DOM in sync.

// React, by design, uses one-way data binding, where data flows from the parent component's state/props to the child component. However, you can achieve two-way data binding by manually combining state updates and UI updates.




import React, { useState } from 'react';

function App() {
    const [text, setText] = useState(""); // State to hold input value

    // Handler to update state when input changes
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <h1>Two-Way Binding in React</h1>
            <form action="">
            <input
                type="text"
                value={text} // State to input field
                onChange={handleChange} // Input field to state
                className='bg-zinc-200'
            />
            <input type="submit" />
            </form>

            <p>You typed: {text}</p>
        </div>
    );
}

export default App;
