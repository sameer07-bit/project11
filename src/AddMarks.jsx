import React, { useContext, useState } from 'react'
import { MarksContext } from './MarksContext.jsx';
export default function AddMarks() {
    const{addMarks}=useContext(MarksContext);
    const [name, setName]=useState("");
    const [score, setScore]=useState("");
    const handleAdd=()=>{
        if(name && score){
            addMarks({name, score: Number(score)});
            setName("");
            setScore("");
        }
    }
  return (
    <div>
      <h3>Add Student Marks</h3>
      <input type="text" placeholder="Enter student name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="number" placeholder="Enter marks" value={score} onChange={(e)=>setScore(e.target.value)}/>
      <button onClick={handleAdd}>Add Marks</button>
    </div>
  )
}