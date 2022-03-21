import Course from "../../components/Course/Course";
import { courseInfo, classInfo } from "../../components/Course/courseInfo";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Title from "../../components/Title/Title";
import { styled } from "@mui/material/styles";

function Courses() {
    const Item = styled(Button)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: "1.5vw",
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

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                width: matches ? "100%" : "unset",
                padding: matches ? 1 : "unset",
            }}
        >
            <Stack
                spacing={matches ? "1vw" : "6vw"}
                direction="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#f8f8f8"
                sx={{
                    marginTop: "3vw",
                    marginLeft: "5vw",
                    marginRight: "5vw",
                    padding: "2vw",
                    marginBottom: "3vw",
                }}
            >
                <Title
                    text="class 설명"
                    textColor="#000000"
                    textSize="2rem"
                    bottom="1vw"
                    fontFamily="NIXGONM-Vb"
                />
                {classInfo.map((item) => (
                    <div>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "S-CoreDream-3Light",
                                fontWeight: "bold",
                                fontSize: "1.3rem",
                                backgroundColor: "#ff960077",
                                padding: "2px",
                            }}
                        >
                            {item.className}
                        </Typography>{" "}
                        <span style={{ fontSize: "1.5rem", color: "#ff9600" }}>
                            |
                        </span>{" "}
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "S-CoreDream-3Light",
                                fontSize: "1.3rem",
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
