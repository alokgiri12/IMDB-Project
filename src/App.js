import "./App.css";
import NavBar from "./Components/Home/NavBar";
import Banner from "./Components/Home/Banner";
import Movies from "./Components/Home/Movies";
import Watchlist from "./Components/Watchlist/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          ></Route>
          <Route path="/Watchlist" element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
