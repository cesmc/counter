import { useState } from 'react';
import '../App.css';

function Counter(props) {
  const { min, max, inverter } = props;

  const [number, setNumber] = useState(0);

  const add = () => {
    if(number === max){
      return
    }
    setNumber(number + 1);
  }

  const rest = () => {
    if(number === min){
      return
    }
    setNumber(number - 1);
  }

  return (
    <div className={inverter ? 'invertido' : ''}>
     <button onClick={add}>+</button>
     <span>{number}</span>
     <button onClick={rest}>-</button>
    </div>
  );
}

export default Counter;