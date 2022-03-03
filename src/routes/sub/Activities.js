import ReactPlayer from "react-player/lazy";
import {
    Box,
    Stack,
    Button,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { useState } from "react";
import Video from "../../components/Video/Video";
import { styled } from "@mui/material/styles";

import { activitiesInfo } from "../../components/Activity/activitiesInfo";
import Activity from "../../components/Activity/Activity";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Activities() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    const Item = styled(Button)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: matches ? "1.3vw" : "3vw",
        height: matches ? "2.8vw" : "6vw",
        textAlign: "center",
        backgroundColor: "#dcbf8b",
        color: "#fdfbf8",
        fontFamily: "SEBANG_Gothic_Bold",
        "&:hover": {
            backgroundColor: "#dcbf8b",
            boxShadow: "none",
            color: "#31271c",
            opacity: 0.7,
        },
    });

    return (
        <>
            <Video />

            <Box
                sx={{
                    paddingTop: matches ? "3vw" : "6vw",
                    paddingBottom: matches ? "3vw" : "6vw",
                    backgroundColor: "#ffffff",
                }}
            >
                <Box sx={{ backgroundColor: "#f1f1f1" }}>
                    <Stack
                        spacing={"3vw"}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            height: matches ? "4.3vw" : "10vw",
                        }}
                    >
                        {activitiesInfo.map((item) => (
                            <a
                                href={`#${item.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Item key={item.title}>{item.title}</Item>
                            </a>
                        ))}
                    </Stack>
                </Box>

                {activitiesInfo.map((item, index) => (
                    <Activity obj={item} index={index} />
                ))}
            </Box>
        </>
    );
}

export default Activities;
