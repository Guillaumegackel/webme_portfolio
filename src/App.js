import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import RandomPage from "./components/RandomPage";

function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="random-itw-job" element={<RandomPage />} />
    </Routes>
  </BrowserRouter>
  </div>
)}

export default App;
