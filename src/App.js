import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage.jsx"
import Authentication from "./components/Authentication/Authentication.jsx"


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={true ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
