import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Activities from "./routes/Activities";
import Courses from "./routes/Courses";
import Faqs from "./routes/Faqs";
import Home from "./routes/Home";
import Participation from "./routes/Participation";
import Review from "./routes/Review";
import WhyCheerEng from "./routes/WhyCheerEng";
import Header from "./components/Header";
import Footer from "./components/Footter";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/0" element={<WhyCheerEng />} />
                    <Route path="/1" element={<Courses />} />
                    <Route path="/2" element={<Activities />} />
                    <Route path="/3" element={<Participation />} />
                    <Route path="/4" element={<Review />} />
                    <Route path="/5" element={<Faqs />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
