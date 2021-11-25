import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <NavBar />
            <div className="max-w-screen-md mx-auto pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/article/:name" element={<Article />} />
                    <Route path="/articles-list" element={<ArticlesList />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
