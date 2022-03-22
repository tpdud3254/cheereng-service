import Course from "../../components/Course/Course";
import { courseInfo, classInfo } from "../../components/Course/courseInfo";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Title from "../../components/Title/Title";
import { styled } from "@mui/material/styles";

function Courses() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const Item = styled(Button)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: matches ? "1.5vw" : "1rem",
        textAlign: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "#f6aa5c",
        color: "#ffffff",
        fontFamily: "NIXGONM-Vb",
        fontWeight: "bold",
        "&:hover": {
            boxShadow: "none",
            backgroundColor: "#f6aa5c",
            color: "#ffffff",
            opacity: 0.7,
        },
        margin: "2vw",
        padding: "1vw",
    });

    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                width: matches ? "100%" : "unset",
                padding: matches ? 1 : "unset",
                paddingTop: matches ? "unset" : "5vw",
            }}
        >
            <Stack
                spacing={matches ? "1vw" : "3vw"}
                direction="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#f8f8f8"
                sx={{
                    marginTop: matches ? "3vw" : "unset",
                    marginLeft: "5vw",
                    marginRight: "5vw",
                    padding: matches ? "2vw" : "2vw",
                    marginBottom: "3vw",
                }}
            >
                <Title
                    text="class 설명"
                    textColor="#000000"
                    textSize={matches ? "2rem" : "1.3rem"}
                    bottom="1vw"
                    fontFamily="NIXGONM-Vb"
                />
                {classInfo.map((item) => (
                    <div style={{ textAlign: "center" }}>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "S-CoreDream-3Light",
                                fontWeight: "bold",
                                fontSize: matches ? "1.3rem" : "1.2rem",
                                backgroundColor: "#ff960077",
                                padding: "2px",
                            }}
                        >
                            {item.className}
                        </Typography>
                        {matches ? " " : <br />}
                        <span style={{ fontSize: "1.3rem", color: "#ff9600" }}>
                            |
                        </span>{" "}
                        {""}
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "S-CoreDream-3Light",
                                fontSize: "1rem",
                                color: "#333333",
                            }}
                        >
                            {item.content}
                        </Typography>
                    </div>
                ))}
                <a
                    href="http://cheereng.com/2"
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <Item>클래스 둘러보기</Item>
                </a>
            </Stack>

            <Divider
                variant="middle"
                sx={{
                    borderColor: "#aaaaaa",
                    margin: "3vw",
                    marginLeft: "7vw",
                    marginRight: "7vw",
                    borderBottomWidth: "small",
                }}
            />
            {courseInfo.map((item, index) => (
                <Course courseObj={item} />
            ))}
        </Box>
    );
}

export default Courses;
