import Card from "./components/Card";
import Home from "./pages/Home";
import First from './pages/First'
import "./styles.css";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first' element={<First />} />
      </Routes>
    </div>
  );
}
