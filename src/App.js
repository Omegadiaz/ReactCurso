import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { key:'dbad',  name: 'Max', age: 28},
      { key:'dadfa', name: 'Manu', age: 29},
      { key:'adafd', name: 'Stephanie', age: 26},
    ],
    Otras_cosas: []
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; //primero vale false, se cambia el estado a true y al pulsar el botón se vuelve a comprobar la condición.
    this.setState ({
      showPersons: !doesShow
    })
  }
  
  render() {
    let persons = null;
    if (this.state.showPersons) {
     persons = (
     <div>
      {this.state.persons.map((person, index) => {
        return <Person
        click={() => this.deletePersonHandler(index)}
        key={person.key}
        name={person.name}
        age={person.age}
       />
      })}
        
     </div> )
    }

    return (
      <div className="App">
        <h1> Hi, I´m a React App </h1>
        <button onClick={this.togglePersonsHandler}>Toogle Persons</button>
        {persons}
        

      </div>
    );
  }
}

export default App;
