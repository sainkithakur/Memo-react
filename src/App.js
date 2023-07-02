import React,{useState} from 'react';
import Home from './Home';

const App = () => {
  const [count,setCount]=useState(0)
  const [data,setData]=useState(100)
  return (
    <div>
    Memo With React {count}
    <Home data={data} />
    <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
  );
};

export default App;
