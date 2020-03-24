import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id:'dbad',  name: 'Max', age: 28},
      { id:'dadfa', name: 'Manu', age: 29},
      { id:'adafd', name: 'Stephanie', age: 26},
    ],
    Otras_cosas: []
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState ( {persons: persons} )
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
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => this.nameChangedHandler(event, person.id)}
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
