import "./App.css";
import Header from "./components/Global Components/Header";
import Sidebar from "./components/Global Components/Sidebar";
import CustomSpreadsheetOne from "./components/Spreadsheets/CustomSpreadsheetOne";
import SpreadsheetOne from "./components/Spreadsheets/SpreadsheetOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Global Components/Footer";

function App() {
  return (
    <Router>
      <div className="w-full">
        <div className="absolute top-0 left-0 h-fit">
          <Sidebar />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[96%] ml-auto">
        <Header />
          <Routes>
            <Route path='/' element={<CustomSpreadsheetOne />} />
            <Route path='/report-2' element={<SpreadsheetOne />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;




