import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from './views/Home'


function Checkout() {
  return <h2>Checkout</h2>
}

function Login() {
  return <h2>Login</h2>
}

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
