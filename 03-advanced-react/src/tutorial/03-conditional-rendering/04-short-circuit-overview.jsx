import { useState } from 'react';

const ShortCircuitOverview = () => {
  //truthy
  const [name, setName] = useState('Susan');
  //falsy
  const [text, setText] = useState('');
  const codeExample = text || 'hello world';

  return (
    <div>
      <h4>falsy OR {text || 'hello world'}</h4>
      <h4>falsy AND {text && 'hello world'}</h4>
      <h4>truthy OR {name || 'hello world'}</h4>
      <h4>truthy OR {name && 'hello world'}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
