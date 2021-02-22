import React from 'react';
import './App.css';
import Cardlist from './Cardlist.js';
import Form from './Form';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", login: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", login: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", login: "Facebook" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData
    }
  };
  addUser = (user) => {
    this.setState({
      profiles: [user]
    })


    console.log(user)
  }
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onNewUser={this.addUser} />
        <Cardlist profiles={this.state.profiles} />



      </div>
    )
  }
}




export default App;

