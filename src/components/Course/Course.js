import { Box, Typography, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function Course({ courseObj }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    const onMouseUp = (e) => {
        e.target.style.textDecoration = "underline";
    };

    const onMouseLeave = (e) => {
        e.target.style.textDecoration = "none";
    };

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
                paddingLeft: matches ? "10vw" : "",
                paddingRight: matches ? "10vw" : "",
                paddingTop: matches ? "" : "6vw",
                paddingBottom: matches ? "" : "6vw",
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={matches ? "1vw" : "3vw"}>
                    <Grid item xs={10}>
                        <Stack
                            spacing={"1.5vw"}
                            justifyContent="center"
                            alignItems="left"
                        >
                            <Stack>
                                <div>
                                    {courseObj.badge ? (
                                        <img
                                            src="/assets/images/sub/course/primeum_badge.png"
                                            style={{
                                                width: matches ? "" : "20vw",
                                            }}
                                        ></img>
                                    ) : null}
                                </div>
                                <Typography
                                    variant="h3"
                                    component="div"
                                    sx={{
                                        color: "#000000",
                                        fontFamily: "SEBANG_Gothic_Bold",
                                        fontSize: matches ? "2.1vw" : "5vw",
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
                            </Stack>
                            <Box
                                sx={{
                                    backgroundColor: color[courseObj.theme][1],
                                    lineHeight: 1.5,
                                    fontFamily: "NanumSquare",
                                    fontSize: matches ? "1.5vw" : "3vw",
                                }}
                            >
                                <ul
                                    style={{
                                        paddingInlineStart: matches ? 40 : 20,
                                    }}
                                >
                                    {courseObj.course.map((item, index) => (
                                        <li
                                            key={index}
                                            onMouseOver={onMouseUp}
                                            onMouseOut={onMouseLeave}
                                            style={{
                                                fontFamily: "NanumSquare",
                                                fontSize: matches
                                                    ? "1.5vw"
                                                    : "4vw",
                                            }}
                                        >
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
                    <Grid item xs={2} sx={{ textAlign: "right" }}>
                        <img
                            style={{ height: "15vw" }}
                            src={`/assets/images/sub/course/${courseObj.id}.png`}
                        ></img>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            style={{ width: "100%" }}
                            src={`/assets/images/sub/course/${
                                courseObj.id
                            }_schedule${matches ? "" : "_m"}.png`}
                        ></img>
                        <div style={{ fontSize: matches ? "1rem" : "0.8rem" }}>
                            {courseObj.text}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Course;
