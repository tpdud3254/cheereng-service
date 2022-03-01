import { Box, Typography, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
function Course({ courseObj }) {
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
                padding: 5,
                paddingLeft: 20,
                paddingRight: 20,
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Stack
                            spacing={3}
                            justifyContent="center"
                            alignItems="left"
                        >
                            <Stack spacing={2} direction="row">
                                <Typography
                                    variant="h3"
                                    component="div"
                                    sx={{
                                        color: "#000000",
                                        fontFamily: "SEBANG_Gothic_Bold",
                                        fontSize: 30,
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
                                        <img src="/assets/images/course/primeum_badge.png"></img>
                                    ) : null}
                                </div>
                            </Stack>
                            <Box
                                sx={{
                                    backgroundColor: color[courseObj.theme][1],
                                    lineHeight: 1.5,
                                    fontFamily: "NanumSquare",
                                    fontSize: 20,
                                }}
                            >
                                <ul>
                                    {courseObj.course.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                        <img
                            style={{ height: "100%", maxHeight: "200px" }}
                            src={`/assets/images/course/${courseObj.id}.png`}
                        ></img>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            style={{ width: "100%" }}
                            src={`/assets/images/course/${courseObj.id}_schedule.png`}
                        ></img>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Course;
