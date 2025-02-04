import React from 'react'
import Background from './components/Background'
import Forground from './components/Forground'

const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Background />
      <Forground />
    </div>
  )
}

export default App










































// import React, { useState } from 'react'
// import Product from './Product';

// const App = () => {
//   const [count,setCount] = useState(0);
//   const [color,setColor] = useState("#000");

//   // Random color generate karne ka function 
//   const getRandomColor = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color;
//   };

//   const handleClick = () => {
//     setCount(count + 1); // count increase karega
//     setColor(getRandomColor()); // Random color generate hoga
//   }
//   return (
//     <div className='text-center -mt-10'>
//       {/* count ko randomcolor ka sath show karna */}
//       <h1 style={{color: color, fontSize: "9rem"}}>{count}</h1>

//       <button 
//       onClick={handleClick}
//       className='px-5 py-2 text-white rounded-md m-5'
//       style={{backgroundColor: color}}>
//         Click Me
//       </button>
//       <Product />
//     </div>
//   )
// }

// export default App