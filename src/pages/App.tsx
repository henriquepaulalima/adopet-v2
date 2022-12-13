import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Welcome from "./Welcome/Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
