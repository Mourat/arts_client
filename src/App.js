import {Route, BrowserRouter, Routes} from "react-router-dom"
import Arts from "./pages/Arts";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css"

function App() {
    return (
        <div className="App d-flex align-items-center justify-content-center text-center pt-5">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Arts/>}/>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/update/:id" element={<Update/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
