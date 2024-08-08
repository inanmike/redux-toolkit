import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'

function App() {

  const dispatch = useDispatch();

  // const {value} = useSelector((store) => store.counter) -> objenin içerisinden istediğin değişkeni almak için
  const {value} = useSelector((store) => store.counter);
  const isAuthenticated = useSelector((store) => store.counter.isAuthenticated);
  const list = useSelector((store) => store.counter.personalList);
  const name = useSelector((store)=> store.counter.name);

  console.log(name)
  console.log(value)
  console.log(isAuthenticated)
  console.log(list[0][1])

  return (
      <div>
        <div>{value}</div>
        <div>
          <button onClick={()=> dispatch(increment())}>Arttır</button>
          <button onClick={()=> dispatch(decrement())}>Azalt</button>
        </div>
      </div>
  )
}

export default App
