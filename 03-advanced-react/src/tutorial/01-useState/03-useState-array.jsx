import { data } from '../../../data.jsx';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h1>{person.name}</h1>
            <button onClick={() => removePerson(person.id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear list
      </button>
    </div>
  );
};

export default UseStateArray;
