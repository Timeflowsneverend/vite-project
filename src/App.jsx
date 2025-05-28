import { BrowserRouter as Router } from 'react-router-dom'
import Path from './routes'
import './App.css'

const App = () => {
  return (
    <Router>
      <Path />
    </Router>
  )
}

export default App

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }
