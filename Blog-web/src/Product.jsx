import React, { useState } from 'react'

const Product = ({data}) => {
    const [a,b] = useState(false)
  return (
    <div>
        <h1 className={`text-5xl ${a === false ? "text-red-600" : "text- text-blue-600"}`}>{a === false ? "Hello" : "Hey"}</h1>
        <button  className='px-5 py-2 bg-black text-white rounded-md m-5' onClick={() => b(!a)}>Change</button>
    </div>
  )
}

export default Product