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
                <ImageList
                    sx={{
                        backgroundColor:
                            index % 2 === 0 ? "#f1f1f1" : "#ffffff",
                        padding: "1vw",
                    }}
                    variant="woven"
                    cols={3}
                    gap={3}
                >
                    {activitiesInfo[index].url.map((item, index) => (
                        <ImageListItem key={item}>
                            <img src={item} alt={index} />
                        </ImageListItem>
                    ))}
                </ImageList>
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
