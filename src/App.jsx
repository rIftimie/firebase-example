import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/create-post/CreatePost";
import Home from "./pages/home/Home";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create" element={<CreatePost />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
