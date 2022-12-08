import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome/Welcome";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
