import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { useAppSelector, useAppDispatch } from "../hooks";
import { increment, decrement, incrementByAmount, selectCount } from "./counterSlice";

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
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className=''>{count}</span>
        <button
          className=''
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      
    </div>
  );
}
