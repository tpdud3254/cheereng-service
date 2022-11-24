import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./routes/Home";
import Faqs from "./routes/sub/Faqs";
import Review from "./routes/sub/Review";
import Courses from "./routes/sub/Courses";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Activities from "./routes/sub/Activities";
import WhyCheerEng from "./routes/sub/WhyCheerEng";
import Participation from "./routes/sub/Participation";
import BottomBar from "./components/BottomBar/BottomBar";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { lazy, useEffect } from "react";
import Video from "./components/Video/Video";

function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        lazy(() => Video);
    }, []);

    return (
        <div>
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

                {matches ? null : <BottomBar />}
            </Router>
        </div>
    );
}

export default App;
