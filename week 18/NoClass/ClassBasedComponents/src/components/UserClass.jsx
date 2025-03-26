import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // super() is used to call the constructor of the parent class (React.Component)
      this.state = {
      count: 0,
      count2: 1,
    };
    console.log("constructor running");
  }

  componentDidMount(){
    console.log("componentDidMount Running After Render"); 
  }

  render() {
    const { name, age } = this.props;
    const { count, count2 } = this.state;

    console.log("render running", name);

    return (
      <div className="w-52 h-auto bg-gray-200 p-4 rounded-lg shadow-lg text-center text-sm hover:scale-105 transition-transform duration-300 ">
        <h1 className="font-mono text-green-600">Class Based Components</h1>
        <p>
          Class based components are the original way to create components in
          React. They are also known as stateful components. They are ES6
          classes that extend from React.Component and can have a constructor
          that assigns this.state. They also have access to the lifecycle
          methods.
        </p>
        <p className="text-blue-500">
          written by {name} and age is {age}
          (props)
        </p>

        <p className="text-red-500 mt-1">count : {count} (state)</p>
        <button
          className="bg-green-300 p-1 rounded-lg"
          onClick={() =>
            this.setState({ count: count + 1, count2: count2 + 1 })
          }
        >
          Increment count
        </button>
        <p className="text-red-500 mt-1">count2 : {count2} (state)</p>
      </div>
    );
  }
}

export default UserClass;
