import { Login } from "./Pages/Login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { QutoesPage } from "./Pages/QuotesPage/QuotesPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<QutoesPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
