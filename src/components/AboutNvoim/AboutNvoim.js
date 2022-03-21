import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { width } from "@mui/system";
import { aboutNvoimInfo } from "./aboutNvoimInfo";

function AboutNvoim() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Stack
            spacing={matches ? "3vw" : "6vw"}
            direction="column"
            justifyContent="center"
            alignItems="center"
            paddingTop={"7vw"}
        >
            <a name="aboutNvoim"></a>
            <Typography
                component="div"
                sx={{
                    color: "#ffffff",
                    fontFamily: "Cafe24Ohsquareair",
                    fontSize: matches ? "3vw" : "6vw",
                }}
            >
                " 치어와 함께{" "}
                <span style={{ color: "#fffe99" }}>설레는 영어</span> "
            </Typography>

            <img
                src="/assets/images/sub/whycheereng/aboutnvoim.png"
                style={{
                    width: matches ? "50vw" : "90vw",
                    padding: matches ? "" : "3vw",
                }}
            ></img>

            {aboutNvoimInfo.map((item, index) => (
                <Stack
                    direction={matches ? "row" : "column"}
                    sx={{
                        backgroundColor: "#ffffff",
                        padding: "1.5vw",
                        borderRadius: matches ? "40px" : "20px",
                    }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <img
                        src={item.imgSrc}
                        style={{
                            width: "60px",
                            height: "60px",
                            padding: matches ? "20px" : "5px",
                        }}
                    ></img>

                    <div
                        style={{
                            textAlign: "left",
                            width: matches ? "850px" : "80vw",
                            padding: "10px",
                        }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                color: "#000000",
                                fontFamily: "NanumSquareRound",
                                fontSize: matches ? "2rem" : "1.3rem",
                            }}
                        >
                            {item.title}
                        </Typography>
                        <ul style={{ paddingLeft: matches ? "20px" : "10px" }}>
                            {item.contents.map((content) => (
                                <li
                                    style={{
                                        color: "#000000",
                                        fontFamily: "NanumSquareRound",
                                        fontSize: matches ? "1.3rem" : "1rem",
                                    }}
                                >
                                    {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Stack
                        // spacing={matches ? "2.2vw" : "6vw"}
                        direction="column"
                        alignItems="left"
                        justifyContent="left"
                    ></Stack>
                </Stack>
            ))}
        </Stack>
    );
}

export default AboutNvoim;
