import React from "react";

class Page1Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "anish",
        age: 20,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ANISH-422004");
    const json = await data.json();

    this.setState({ userInfo: json });
  }

  componentDidUpdate(){
    console.log("Component Updated and Api call Done")
    // setInterval(()=>{
    //     console.log("Interval Running")
    // } , 1000)
  }


  componentWillUnmount(){
    console.log("Component Unmounted")
    // this.cleareInterval()
  }



  render() {
    const { name, age, avatar_url } = this.state.userInfo;

    // console.log(this.state.userInfo)
    return (
      <div className="w-full h-[50vh]  p-10 bg-green-400 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center mb-5">Page 1</h1>
        <p className="text-center">Name : {name}</p>
        <img
          src={`${
            avatar_url
              ? avatar_url
              : "https://images.unsplash.com/photo-1742576948659-3c630862a38d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          }`}
          alt=""
          className="rounded-full"
        />
        <p className="text-center">Age : {age}</p>
      </div>
    );
  }
}

export default Page1Class;
