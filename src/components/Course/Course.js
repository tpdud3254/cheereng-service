import { Box, Typography, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
function Course({ courseObj }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const info = [
        "Group class 40분, 2회 (cheating, 게임, 레벨인식)",
        "Zoom Group Class 1회",
        "Chat Class 1회",
        "Outing Class (비용별도)",
    ];

    const color = {
        yellow: ["#ffd200", "#fef1abaa"],
        green: ["#31ad00", "#86c66daa"],
        red: ["#ea0000", "#f47d7daa"],
    };
    return (
        <Box
            sx={{
                backgroundColor: courseObj.bgColor,
                padding: "3vw",
                paddingLeft: "10vw",
                paddingRight: "10vw",
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={"1vw"}>
                    <Grid item xs={8}>
                        <Stack
                            spacing={"1.5vw"}
                            justifyContent="center"
                            alignItems="left"
                        >
                            <Stack spacing={"1vw"} direction="row">
                                <Typography
                                    variant="h3"
                                    component="div"
                                    sx={{
                                        color: "#000000",
                                        fontFamily: "SEBANG_Gothic_Bold",
                                        fontSize: "2.1vw",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color[courseObj.theme][0],
                                        }}
                                    >
                                        |
                                    </span>{" "}
                                    {courseObj.courseName}
                                </Typography>
                                <div>
                                    {courseObj.badge ? (
                                        <img src="/assets/images/sub/course/primeum_badge.png"></img>
                                    ) : null}
                                </div>
                            </Stack>
                            <Box
                                sx={{
                                    backgroundColor: color[courseObj.theme][1],
                                    lineHeight: 1.5,
                                    fontFamily: "NanumSquare",
                                    fontSize: "1.5vw",
                                }}
                            >
                                <ul
                                    style={{
                                        paddingInlineStart: matches ? 40 : 20,
                                    }}
                                >
                                    {courseObj.course.map((item, index) => (
                                        <li>
                                            <a
                                                href={
                                                    courseObj.courseUrl[index]
                                                }
                                                style={{
                                                    textDecoration: "none",
                                                    color: "#000000",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: "right" }}>
                        <img
                            style={{ height: "15vw" }}
                            src={`/assets/images/sub/course/${courseObj.id}.png`}
                        ></img>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            style={{ width: "100%" }}
                            src={`/assets/images/sub/course/${courseObj.id}_schedule.png`}
                        ></img>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Course;
