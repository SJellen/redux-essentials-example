import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  incrementFive,
  divideTen,
  selectCount,
  divideThree, divisorByAmount,
  reset
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [divisorAmount, setDivisorAmount] = useState('5')

  const incrementValue = Number(incrementAmount) || 0;

  return (

    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementFive(incrementValue))}
        >
         Add 5
        </button>
       
      </div>
      <div className={styles.row}>
      <input
          className={styles.textbox}
          aria-label="Set division amount"
          value={divisorAmount}
          onChange={(e) => setDivisorAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(divisorByAmount(divisorAmount))}
        >
          Divide Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(divideTen(incrementValue))}
        >
         Divide by 10
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(divideThree(incrementValue))}
        >
         Divide by 3
        </button>
      </div>
    </div>
  );
}
