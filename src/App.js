import "./App.css";
import Header from "./components/Global Components/Header";
import Sidebar from "./components/Global Components/Sidebar";
import SpreadsheetOne from "./components/Spreadsheets/SpreadsheetOne";

function App() {
  return (
    <div className="w-full">
      <div className="absolute top-0 left-0 h-fit">
        <Sidebar />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[96%] ml-auto">
        <Header />
        <SpreadsheetOne />
      </div>
    </div>
  );
}

export default App;
