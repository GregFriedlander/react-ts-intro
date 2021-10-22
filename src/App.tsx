import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: Person[];
}

export interface Person {
  name: string;
  age: number;
  url: string;
  note?: string
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Lebron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age: 36,
      note: 'Note for LJ'
    }
  ])

  return (
    <div className="App">
      <h1>People Invited To Our Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
