import {
    Box,
    Stack,
    Button,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { activitiesInfo } from "./activitiesInfo";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Activity({ obj, index }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Stack
            spacing={"2.3vw"}
            justifyContent="center"
            alignItems="center"
            sx={{
                padding: matches ? "5vw" : "",
                paddingTop: matches ? "" : "10vw",
                paddingBottom: matches ? "" : "10vw",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f1f1f1",
            }}
        >
            <a name={obj.id}></a>
            <Typography
                variant="h3"
                component="div"
                sx={{
                    color: "#000000",
                    fontFamily: "SEBANG_Gothic_Bold",
                    fontSize: matches ? "2.3vw" : "6vw",
                }}
            >
                {obj.title}
            </Typography>

            {matches ? (
                <Stack
                    style={{
                        backgroundColor:
                            index % 2 === 0 ? "#f1f1f1" : "#ffffff",
                        padding: "1vw",
                        fontSize: "3rem",
                        fontFamily: "GyeonggiTitleM",
                    }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <a
                        href="https://www.instagram.com/cheereng_/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#000000" }}
                    >
                        &lt;
                    </a>
                    <ImageList
                        sx={{
                            padding: "1vw",
                        }}
                        variant="woven"
                        cols={3}
                        gap={10}
                    >
                        {activitiesInfo[index].url.map((item, index) => (
                            <ImageListItem key={item}>
                                <img src={item} alt={index} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <a
                        href="https://www.instagram.com/cheereng_/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#000000" }}
                    >
                        &gt;
                    </a>
                </Stack>
            ) : (
                <Stack
                    spacing={"3vw"}
                    justifyContent="center"
                    alignItems="center"
                >
                    {activitiesInfo[index].url.map((item, index) => (
                        <img
                            src={item}
                            alt={index}
                            style={{
                                width: "100%",
                            }}
                        />
                    ))}

                    <a
                        href="https://www.instagram.com/cheereng_/"
                        target="_blank"
                        style={{
                            textDecoration: "none",
                            color: "#000000",
                            fontSize: "2rem",
                        }}
                    >
                        +
                    </a>
                </Stack>
            )}

            <Typography
                variant="body1"
                component="div"
                sx={{
                    color: "#000000",
                    fontFamily: "NEXON Lv2 Gothic Light",
                    fontSize: matches ? "1.7vw" : "4vw",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                {obj.explain.split("\n").map((line, i) => {
                    return (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    );
                })}
            </Typography>
        </Stack>
    );
}

export default Activity;
