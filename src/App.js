import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement, logUser} from './actions/index'

function App() {
  const counter = useSelector(state=>state.counter)
  const isLogged= useSelector(state=> state.isLogged)
  const dispatch= useDispatch()

  return (
    
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={()=>dispatch(increment(10))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button>
     { isLogged&& <h3>Valuable Info </h3>}

      <button onClick={()=>dispatch((logUser()))}>{isLogged?'Log out': 'Sign in'}</button>
    </div>
  );
}

export default App;
