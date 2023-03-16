import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });

  const displayPerson = () => {
    setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' });
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>Enjoys to: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show john
      </button>
    </div>
  );
};

export default UseStateObject;
