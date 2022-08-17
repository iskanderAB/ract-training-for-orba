import React, { useState } from 'react';
import logo from './logo.svg';
import Square from './components/Square/Square';
import './App.css';

function App() {
  const [list , setList] = useState([
    {key : 1 , value: "saif"},
    {key : 2 , value: "hammadi"},
    {key : 3 , value: "ali"},
    {key : 4 , value: "khaled"},  
  ])

  const deleteSquare = (index:number) => {
      setList(list.filter((v,i) => i !== index))
  }
  return (
    <div className="App">
      {
        list.map(function(value,index) { 
              return (<div 
                      key={value.key}
                      onClick={function(){deleteSquare(index)}}>
                        <Square myIndex={value.value} />
                    </div>)
      } )
      }
    </div>
  );
}

export default App;
