import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./routes/Home";
import Faqs from "./routes/sub/Faqs";
import Review from "./routes/sub/Review";
import Courses from "./routes/sub/Courses";
import Header from "./components/Header/Header";
import Activities from "./routes/sub/Activities";
import Footer from "./components/Footter/Footter";
import WhyCheerEng from "./routes/sub/WhyCheerEng";
import Participation from "./routes/sub/Participation";

import { AppBar, Toolbar, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
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

                {matches ? null : (
                    <AppBar
                        position="fixed"
                        color="primary"
                        sx={{
                            top: "auto",
                            bottom: 0,
                            backgroundColor: "#b5a78b",
                        }}
                    >
                        <Toolbar>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    width: "100%",
                                    fontFamily: "GyeonggiTitleM",
                                    fontSize: "5vw",
                                }}
                            >
                                <Stack
                                    spacing={"2vw"}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img
                                        style={{
                                            width: "7vw",
                                            opacity: 0.9,
                                        }}
                                        src="/assets/images/common/kakao.png"
                                    ></img>
                                    <span>카톡상담 바로가기</span>
                                </Stack>
                            </Box>
                        </Toolbar>
                    </AppBar>
                )}
            </Router>
        </div>
    );
}

export default App;
