import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <Alert />}
    </div>
  );
};

const Alert = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    return () => clearInterval(intID);
  }, []);

  return <h1>hello there</h1>;
};

export default CleanupFunction;
