import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import HomePage from "./Page/HomePage";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <HomePage/>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
