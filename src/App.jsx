import React from 'react'
import AddMarks from './AddMarks'
import MarkList from './MarkList'
import './App.css'
export default function App() {
  return (
    <div className='app-container'>
      <h1>Welcome to KL university Marks Portal</h1>
      <AddMarks/>
      <MarkList/>
    </div>
  )
}