import './CSS/App.css'
import Home from './Pages/Home'
import OneClass from './Pages/OneClass'
import OneStudent from './Pages/OneStudent'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<OneStudent />} />
        <Route path="/class/:id" element={<OneClass />} />
      </Routes>
    </div>
  )
}

export default App
