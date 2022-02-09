import './App.css';
import { useState } from 'react';
import Node from './Node';


const grid = [];
for (let i = 0; i < 20; i++) {
  grid[i] = [];
  for (let j = 0; j < 20; j++) {
    grid[i][j] = [];
  }
}

let directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

// create random grid item
const randomGridItem = () => {
  const randomI = Math.floor(Math.random() * 20);
  const randomJ = Math.floor(Math.random() * 20);
  return [randomI, randomJ];
}

function App(){
  const [start, setStart] = useState(randomGridItem());
  const [end, setEnd] = useState(randomGridItem());
  console.log(start,end)
  return (
    <div className="Grid">
      {grid.map((row, i) => {
        return <div className='row'>
          {row.map((col, j) => {
            return <Node/>
          })}
        </div>
      })}
    </div>
  )
}

export default App;
