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
import Video from "../../components/Video";
import { styled } from "@mui/material/styles";

import { activitiesInfo } from "../../components/Activity/activitiesInfo";
import Activity from "../../components/Activity/Activity";

const Item = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.3vw",
    height: "2.8vw",
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

function Activities() {
    return (
        <>
            <Video />

            <Box sx={{ paddingTop: "3vw", paddingBottom: "3vw" }}>
                <Box sx={{ backgroundColor: "#f1f1f1" }}>
                    <Stack
                        spacing={"3vw"}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: "4.3vw" }}
                    >
                        {activitiesInfo.map((item) => (
                            <a
                                href={item.id}
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
