import UsersClass from "./UsersClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "default",
      location: "default",
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/joshi-durgesh");
      const json = await data.json();
      this.setState({
        name: json.name,
        location: json.location,
      });
    };
    fetchData();
  }

  render() {
    return (
      <div className='h-[100vh]'>
        <h2>About</h2>
        <UsersClass name={this.state.name} location={this.state.location} />
      </div>
    );
  }
}

export default About;
