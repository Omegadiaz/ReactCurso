import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Gabriel', age: 29},
      { name: 'Nuria', age: 23},
      { name: 'Manu', age: 29}
    ],
    Otras_cosas: []
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON´T DO THIS this.state.persons[0].name = 'Pau';
    this.setState({ //Se actualiza el estado por lo que haya cambiado solamente
      persons: [
        { name: 'Pau', age: 22},
        { name: 'Nuria', age: 23},
        { name: 'Manu', age: 29}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name:  'Gabriel', age: 28},
        { name: 'Nuria', age: 23},
        { name: event.target.value, age: 29}
      ]

    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I´m a React App </h1>
        <button onClick={this.switchNameHandler}>Change name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Fishing</Person>
        <Person changed={this.nameChangedHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
