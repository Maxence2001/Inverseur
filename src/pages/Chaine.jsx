import React from 'react'
import { useState } from 'react'

const Chaine = () => {
    const[state, setState]=useState("")
    const handleInput =(e) =>{

        setState(e.target.value) 
    }
  return (
    <div>

<div className='string-reverse-answer' >
    <label>
        
        <h3 >
            {state.split("").reverse().join("")}
        </h3>
    </label>
</div>

<input className='input-reverse' 
    type="text" 
    placeholder= 'Ajouter une suite de caracteres'
    value={state}
    onChange={handleInput}
    
    /> 

    </div>
  )
}

export default Chaine