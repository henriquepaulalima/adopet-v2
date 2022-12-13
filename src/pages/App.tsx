import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Welcome from "./Welcome/Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
