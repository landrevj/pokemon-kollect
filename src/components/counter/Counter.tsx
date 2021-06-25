import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux';
import { increment, decrement, incrementByAmount, selectCount } from './counterSlice';

export function Counter()
{
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className=''>
        <button
          className=''
          aria-label='Increment by 5'
          onClick={() => dispatch(incrementByAmount(5))}
        >
          +5
        </button>
        <button
          className=''
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className=''>{count}</span>
        <button
          className=''
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className=''
          aria-label='Increment by 3'
          onClick={() => dispatch(incrementByAmount(-5))}
        >
          -5
        </button>
      </div>
      
    </div>
  );
}
