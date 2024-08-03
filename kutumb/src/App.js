import { Login } from "./Pages/Login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { QutoesPage } from "./Pages/QuotesPage/QuotesPage";
import { QuoteCreationPage } from "./Pages/QuoteCreationPage/QuoteCreationPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/quotesPage" element={<QutoesPage />} />
      <Route path="/quoteCreation" element={<QuoteCreationPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
