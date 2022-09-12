import React, { useState } from 'react'

function Thi(){

    const [value,setValue] = useState('')

    return(<>
    <h1>
         
    </h1>
    <form>
        <input
        required
        value={value}
        onChange={e => setValue(e.target.value)}
        >
        </input>
    </form>
    </>)
}
export default Thi;