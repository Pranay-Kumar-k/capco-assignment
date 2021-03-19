import React from "react";
import './App.css';
import Users from "./Components/Users";
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users:[]
    }
  }

  componentDidMount() {
    
    axios.get("http://api.mocki.io/v1/b735463e")
    .then((res) => {
        this.setState({
            users:res.data.contacts
        })
        console.log(res.data.contacts)
    })
    .catch((err) => console.log(err))
}

  render() {
    return (
      <div className="App">
        {/* 1. Implement Contact application from the given ReSTFul Endpoint, Consider all your domain expertise to build this contacts application.
  API : api.mocki.io/v1/b735463e Note: Domain expertise includes your ability to think about the product as a marketable solution, Such as Responsive user interface,Requirement:
  1-Login Page
  2-Build Contact Card by consuming ReSTFul endtpoint.
          Welcome to Capco */}
          {this.state.users && <Users users={this.state.users}/>}
      </div>
    );
  }
  
}

export default App;
